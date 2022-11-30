import { API_REQUEST } from '../constants/action-types';

export const makeApiRequest =
    (payload: any, pendingPayload?: any, failurePayload?: any) => ({
        type: API_REQUEST
        , payload
        , meta: {
            pendingPayload: pendingPayload || {}
            , failurePayload: failurePayload || {}
        }
    });

export const makeMockApiRequest =
    (payload: Record<string, any>, mockResponse: Record<string, any>|Array<any>, mockMinTime=1, mockMaxTime=1000, pendingPayload?: any, failurePayload?: any) => ({
        type: API_REQUEST
        , payload
        , mock: true
        , mockResponse
        , mockMinTime
        , mockMaxTime
        , meta: {
            pendingPayload: pendingPayload || {}
            , failurePayload: failurePayload || {}
        }
    });