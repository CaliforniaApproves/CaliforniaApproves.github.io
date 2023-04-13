import React from 'react'

import {
    BrowserRouter as Router
    , Routes
    , Route
} from "react-router-dom";

import { Provider } from 'react-redux';

import store from './store';

import ErrorBoundary from './components/common/error-boundary';
import Root from './components/root';
import LandingPage from './landing-page/root';

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
                            <Routes>
                                <Route path="/" element={<LandingPage />}/>
                            </Routes>
                        </Root>
                    </ErrorBoundary>
                </Router>
            </Provider>
        );
    }
}