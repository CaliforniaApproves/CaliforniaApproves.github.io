/* ****** CAA Imports ****** */
// UI
import Header from '../components/header';
import Footer from '../components/footer';
import VideoSection from './video-section';
import BallotSection from './ballot-section';
import ClosingSection from './closing-section';
import CallToAction from './call-to-action';
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
const Approval101Page = () => {
    return (
        <div className='approval-101-page'>
            <Header/>
            <VideoSection />
            <BallotSection />
            <ClosingSection/>
            <CallToAction />
            <Footer/>
        </div>
    );
}

//make this component available to the app
export default Approval101Page
