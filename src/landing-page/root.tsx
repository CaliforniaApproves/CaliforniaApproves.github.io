/* ****** CAA Imports ****** */
// UI
import Header from '../components/header';
import Example from './body';
// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated
type MyProps = {
};

// create a component
const LandingPage = ({}: MyProps) => {
    return (
        <div>
            <Header />
            <Example />
        </div>
    );
}

//make this component available to the app
export default LandingPage
