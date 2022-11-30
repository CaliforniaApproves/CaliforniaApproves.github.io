

import { uuidGenerator } from './common';
import { API_REQUEST_STATES } from '../constants/common';
import { Slice } from '@reduxjs/toolkit';

export const getActions = <T extends Slice>(slice: T) => {
	const genericActions: T['actions'] = slice.actions;
	const keys = Object.keys(genericActions) as Array<keyof typeof genericActions>;
	return keys.reduce(
		(accumulator, key) => {
			accumulator[key] = `${slice.name}/${String(key)}`;
			return accumulator;
		},
		{} as Record<keyof typeof genericActions, string>
	);
};

export const setFetching = (appState: any, actionType: string, key?: boolean) => {
    const updatedFetchingObj: any = {};
    updatedFetchingObj[actionType] = undefined;
    if (key !== undefined) {
        updatedFetchingObj[actionType] = key;
    }
    return Object.assign({}, appState.fetching, updatedFetchingObj);
};

export const returnMessage = (messageData: any, messageText?: string, duration?: number) => {

    const msgObj: any = { mode: 'success', duration: duration, uuid: uuidGenerator() };

    if (messageData.error) {
        msgObj.mode = 'error';
        msgObj.message = messageText || 'ERROR: ' + (messageData.error.message || JSON.stringify(messageData.error ? messageData.error : messageData));
    } else {
        msgObj.message = messageText;
    }

    return msgObj;
}

export interface IRequestMonitor {

    timeoutClean: (delay?: number) => void;
    watch: (requestAction: any) => void;
    cleanRequestQueue: () => void;
    abortOutstandingRequests: () => void;
}
export class RequestMonitor implements IRequestMonitor {
    requestQueue: Array<any>;
    cleanWatchOn: boolean;
    timeoutWait: number;

	constructor(requestQueue=[], waitTime=5000) {
	    this.requestQueue = requestQueue;
	    this.cleanWatchOn = false;
	    this.timeoutWait = waitTime;
	    this.timeoutClean(waitTime);
	 }

	timeoutClean(delay?: number) {
		if (!this.cleanWatchOn && this.requestQueue.length) {
			this.cleanWatchOn = true;
			setTimeout(this.cleanRequestQueue, delay || this.timeoutWait);
		}
	}

	//adds a request action object to the queue
	watch(requestAction: any) {
		this.requestQueue.push(requestAction);
		this.timeoutClean();
	}

	//periodically scans the requestQueue and removes any requests that are no longer in-progress
	cleanRequestQueue() {
		this.cleanWatchOn = false;
		if (this.requestQueue && this.requestQueue.length) {
			this.requestQueue = this.requestQueue.reduce((cleanedQueue, request) => {
				if (request.requestController.status !== API_REQUEST_STATES.IN_PROGRESS) {
					cleanedQueue.push(request);
				}
				return cleanedQueue;
			}, []);

			if (this.requestQueue && this.requestQueue.length) {
				this.timeoutClean();
			}
		}
	}

	abortOutstandingRequests() {
		this.requestQueue.forEach((apiRequest) => {
			if (apiRequest.requestController) {
				if (apiRequest.requestController.status === API_REQUEST_STATES.IN_PROGRESS) {
		            apiRequest.requestController.abortController.abort();
		        }
			} else { //should never happen
				console.log('Error: An oustanding api request without a requestController could not be aborted.');
			}
	    });
	}
}