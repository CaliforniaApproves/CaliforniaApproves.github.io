import { API_REQUEST, SHOW_ERROR_TOAST } from '../constants/action-types';
import { API_REQUEST_STATES } from '../constants/common';
import { stringOrNull } from '../utils/type-checks';
import * as rax from 'retry-axios';
import twistConfig from '../config';
import axios, { AxiosError, AxiosPromise, AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { createAction } from '@reduxjs/toolkit';

const domain = twistConfig.domain;

let requestIdCounter = 0;

const authLocal: Storage = localStorage;

const getDefaultRaxConfig = (myAxiosInstance: AxiosInstance): any => {
    return {
        // Retry 4 times on requests that return a response (500, etc) before giving up.
        retry: 4
        // Retry twice on errors that don't return a response (ENOTFOUND, ETIMEDOUT, etc).
        , noResponseRetries: 5
        // Milliseconds to delay at first.  Defaults to 100.
        , retryDelay: 200
        // HTTP methods to automatically retry.  Defaults to:
        // ['GET', 'HEAD', 'OPTIONS', 'DELETE', 'PUT']
        , httpMethodsToRetry: ['GET', 'HEAD', 'OPTIONS']
        // The response status codes to retry.  Supports a double
        // array with a list of ranges.  Defaults to:
        // [[100, 199], [429, 429], [500, 599]]
        , statusCodesToRetry: [[100, 199], [429, 429], [500, 599]]
        // If you are using a non static instance of Axios you need
        // to pass that instance here (const ax = axios.create())
        , instance: myAxiosInstance
        // You can set the backoff type.
        // options are 'exponential' (default), 'static' or 'linear'
        , backoffType: 'exponential'
        // You can detect when a retry is happening, and figure out how many
        // retry attempts have been made
        , onRetryAttempt: (err: any) => {
            const cfg = rax.getConfig(err);
        }
    }
}

const getAxiosInstance = () : AxiosInstance => {
    const myAxiosInstance = axios.create();
    myAxiosInstance.defaults.raxConfig = getDefaultRaxConfig(myAxiosInstance);
    rax.attach(myAxiosInstance);
    return myAxiosInstance;
}

const apiMiddleware = ({ getState, dispatch }: any) => (next: (params: any) => any) => (action: any) => {

    if (action.type.indexOf('API_REQUEST') == -1) { //we only want to catch API_REQUEST and API_REQUEST_LOOP
        return next(action);
    }

    const requestConfig: AxiosRequestConfig = { method: action.payload.requestParams.method, url: action.payload.url };
    const requestId = requestIdCounter++;

    requestConfig.headers = {}; //Axios doesn't like Headers interface so use a basic map

    if (action.payload.requestParams.headers) {
        Object.assign(requestConfig.headers, action.payload.requestParams.headers)
    }

    if (action.payload.requestParams.body) {
        requestConfig.data = action.payload.requestParams.body;
    }

    if (!requestConfig.headers['Content-Type'] && requestConfig.data) {
        requestConfig.headers['Content-Type'] = 'application/json';
    }

    //append the auth token if it exists
    const operatorString = authLocal.getItem('operator');
    const operator = stringOrNull(operatorString) ? JSON.parse(operatorString) : null;
    if (operator) {
        requestConfig.headers['Authorization'] =`Bearer ${operator['token']}`;
    }

    const successHandler = (response: AxiosResponse<any>): void => {
        if (action.requestController) action.requestController.status = API_REQUEST_STATES.SUCCESS;

        if (response !== null) {
            const successAction = createAction<Record<string, any>>(action.payload.nextActionType.SUCCESS);
            dispatch({
                ...successAction(response.data)
                , meta: Object.assign({ requestId: requestId }, action.payload.meta)
            });
        }
    };

    const failHandler = (error: AxiosError<any>): void => {
        // TODO: consider additional logging
        let title;
        if (error.response) { // Errors with response from server
            title = `A ${error.config?.method?.toUpperCase()} to ${error.config?.url?.replace(domain, "").replace("/api", "").toUpperCase()} returned a ${error.response.status}`;
            if (action.requestController) action.requestController.status = API_REQUEST_STATES.FAILURE;
            const failureAction = createAction<Record<string, any>>(action.payload.nextActionType.FAILURE);
            dispatch({
                ...failureAction({error: (error.response.data.message || error.response.data.description) || JSON.stringify(error.response.data), originState: action.meta.failurePayload })
                , meta: { ...action.payload.meta, requestId: requestId }
            });
            if (!action.meta.hideError) {
                dispatch({
                    type: SHOW_ERROR_TOAST, payload: {
                        error: {
                            title
                            , message: (error.response.data.message || error.response.data.description) || JSON.stringify(error.response.data)
                            , show: true
                        }
                    }
                })
            }
        } else if (error.request) { // Errors with no response from server (network)
            title = 'No response from server';
            if (action.requestController) action.requestController.status = API_REQUEST_STATES.FAILURE;
            const failureAction = createAction<Record<string, any>>(action.payload.nextActionType.FAILURE);
            dispatch({
                ...failureAction({error: {data: title}, originState: action.meta.failurePayload })
                , meta: { ...action.payload.meta, requestId: requestId }
            });
            dispatch({
                type: SHOW_ERROR_TOAST, payload: {
                    error: {
                        title
                        , message: ""
                        , show: true
                    }
                }
            })
        } else { // Errors where we didn't even make a request
            title = 'Something went wrong';
            if (action.requestController) action.requestController.status = API_REQUEST_STATES.FAILURE;
            const failureAction = createAction<Record<string, any>>(action.payload.nextActionType.FAILURE);
            dispatch({
                ...failureAction({error: {data: error.message}, originState: action.meta.failurePayload })
                , meta: { ...action.payload.meta, requestId: requestId }
            });
            dispatch({
                type: SHOW_ERROR_TOAST, payload: {
                    error: {
                        title
                        , message: error.message
                        , show: true
                    }
                }
            })
        }
    };

    const pendingAction = createAction<Record<string, any>>(action.payload.nextActionType.PENDING); 
    dispatch({
        ...pendingAction(action.meta.pendingPayload)
        , meta: { ...action.payload.meta, requestId: requestId }
    });

    let apiPromise: AxiosPromise<any>|undefined;

    if (action.type === API_REQUEST) {

        // TODO: Handle aborts
        if (action.mock) {
            apiPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve({
                    data: action.mockResponse
                    , status: 200
                    , statusText: 'ok'
                    , headers: {}
                    , config: requestConfig
                  });
                }, (Math.random() * (action.mockMaxTime - action.mockMinTime) + action.mockMinTime));
              });
        } else {
            const axiosInstance: any = getAxiosInstance();
            if (action.payload.retry) {
                axiosInstance.defaults.raxConfig.httpMethodsToRetry.push(requestConfig.method);
            }
            apiPromise = axiosInstance(requestConfig);
        }

    } else {
        console.log(`Unrecognized action type: ${action.type}`);
    }

    apiPromise != null && apiPromise.then(successHandler).catch(failHandler);
};

export default apiMiddleware;
