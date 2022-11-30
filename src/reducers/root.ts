import { combineReducers } from 'redux';
import system from './system';
import errors from './errors';

const filterGenericAction = (state: any, action: any, app: string, reducer: any) => {
	let result;
	if (action.type.indexOf('@@') === 0 || (action.meta && action.meta.app && action.meta.app.indexOf(app) === 0)) {
		result = reducer(state, action); // system init action, and relevant app actions should pass the filter
	} else {
		result = state; // Just return current state, no relevant changes
	}
	return result;
};

const filterAppActions = (app: string, reducer: any) =>
	(state: any, action: any) =>
	(filterGenericAction(state, action, app, reducer))

export interface AppReducer {
	system: any;
	errors: Array<any>;
}

export default combineReducers({
    system
    , errors
});