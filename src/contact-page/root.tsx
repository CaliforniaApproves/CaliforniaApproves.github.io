/* ****** CAA Imports ****** */
// UI
import Header from '../components/header';
import Footer from '../components/footer';
import TopSection from './top-section';
import InfoSection from './info-section';

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
const ContactPage = () => {
    return (
        <div className='caa-contact-page'>
            <Header/>
            <TopSection/>
            <InfoSection/>
            <Footer/>
        </div>
    );
}

//make this component available to the app
export default ContactPage
