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
import AboutPage from './about-page/root';
import ContactPage from './contact-page/root';
import DonatePage from './donate-page/root';
import Approval101Page from './approval-101-page/root';
import ArticlesPage from './articles-page/root';

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
                                <Route path="/about" element={<AboutPage />}/>
                                <Route path="/contact" element={<ContactPage />}/>
                                <Route path="/donate" element={<DonatePage />}/>
                                <Route path="/approval-101" element={<Approval101Page />}/>
                                <Route path="/articles" element={<ArticlesPage />}/>
                            </Routes>
                        </Root>
                    </ErrorBoundary>
                </Router>
            </Provider>
        );
    }
}