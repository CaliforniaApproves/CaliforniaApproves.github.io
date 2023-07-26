/* ****** CAA Imports ****** */
// UI
import Header from '../components/header';
import Footer from '../components/footer';
import CaaIntro from './caa-intro';
import Plan from './plan';
import People from './people';
import JoinUs from './join';

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const AboutPage = () => {
    return (
        <div className='caa-about-page'>
            <Header />
            <CaaIntro />
            <Plan />
            <People />
            <JoinUs />
            <Footer />
        </div>
    );
}

//make this component available to the app
export default AboutPage
