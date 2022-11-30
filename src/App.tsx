import React from 'react'

import {
    BrowserRouter as Router
    , Switch
    , Route
} from "react-router-dom";

import { Provider } from 'react-redux';

import store from './store';

import ErrorBoundary from './components/common/error-boundary';
import Root from './components/root';
import Home from './components/home';

import './assets/stylesheets/components.scss';

/******************************************/
/* invoke cross-tab communication system
/******************************************/

export default class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <ErrorBoundary>
                        <Root>
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                            </Switch>
                        </Root>
                    </ErrorBoundary>
                </Router>
            </Provider>
        );
    }
}