import { combineReducers } from 'redux';
import system from './system';
import errors from './errors';

export interface AppReducer {
	system: any;
	errors: Array<any>;
}

export default combineReducers({
    system
    , errors
});