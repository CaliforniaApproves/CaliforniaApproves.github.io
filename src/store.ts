import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers/root';
import apiMiddleware from './middleware/api';
import appRouterMiddleware from './middleware/app-router';
import { createLogger } from 'redux-logger';
import twistConfig from './config';

const middlewares = [appRouterMiddleware, apiMiddleware];

if (twistConfig.env === 'development' || (twistConfig.env === 'local-test' && !twistConfig.sandbox)) {

    middlewares.push(createLogger({ collapsed: true }));
}

const store = configureStore({reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)});

if (twistConfig.env === 'development' || (twistConfig.env === 'local-test' && !twistConfig.sandbox)) {
    window.store = store;
}

export default store;
