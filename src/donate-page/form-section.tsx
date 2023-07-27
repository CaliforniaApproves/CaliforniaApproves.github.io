/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import transparentLogo from '../assets/images/transparent-white-3.png';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const FormSection = () => {
    return (
        <div className='px-4 py-10 bg-gradient-to-br from-purple to-tan'>
            <img className='lg:w-1/4' src={transparentLogo} alt="california approves logo"/>
        </div>
    );
}

//make this component available to the app
export default FormSection
