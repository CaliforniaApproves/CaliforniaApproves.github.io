/* ****** CAA Imports ****** */
// UI
import Header from '../components/header';
import Footer from '../components/footer';
import Banner from './banner';
import Video from './video';
import AboutApproval from './approval';
import AboutUs from './about';
import Quotes from './quotes';

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

// create a component
const LandingPage = () => {
    return (
        <div>
            <Header />
            <Banner/>
            <Video/>
            <AboutApproval/>
            <AboutUs/>
            <Quotes />
            <Footer />
        </div>
    );
}

//make this component available to the app
export default LandingPage
