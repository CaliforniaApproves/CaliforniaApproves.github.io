/* ****** CAA Imports ****** */
// UI
import Header from '../components/header';
import Footer from '../components/footer';
import Example from './example';
// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React from 'react'
import update from 'immutability-helper';
import Banner from './banner';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const LandingPage = () => {
    return (
        <div>
            <Header />
            <Banner/>
            <Example />
            <Footer />
        </div>
    );
}

//make this component available to the app
export default LandingPage
