import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
import { SET_ACTIVE_APP } from '../constants/action-types';

// This middleware is in change of changeing the route before the state is changed, so app subcomponent would be unmounted before their data is invalidated
/* eslint no-unused-vars: [0, { "varsIgnorePattern": "getState" }] */
const appRouterMiddleware = ({ getState, dispatch }: any) => (next: any) => (action: any) => {
    if (action.type !== SET_ACTIVE_APP) {
        next(action);
        return action;
    }
    const state = getState();
    const currentApp = state.system.activeApp;

    if (currentApp !== action.payload.name) {
        if (action.payload.name) {
            // we don't want to change the current route if we're already on it (or a sub-route)
            let currentPath = document.location.href + '';
            if (currentPath.indexOf('://') != -1) {
                currentPath = currentPath.substring(currentPath.indexOf('://') + 3);
            }
            currentPath = currentPath.substring(currentPath.indexOf('/') + 1);
            if (currentPath.indexOf(action.payload.name) !== 0) {
                history.push(`/${action.payload.name}`);
            }
        } else {
            history.push('/');
        }
    }
    next(action);
    return action;
};

export default appRouterMiddleware;
