/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import Background from '../assets/images/volunteer_transparent.png';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const TopSection = () => {
    return (
        <div className='py-10 px-4 flex h-96 text-center text-white'
            style={{
                backgroundImage: `url(${Background})`
                , backgroundColor: '#283620'
                , backgroundSize: 'cover'
                , backgroundRepeat: 'no-repeat'
            }}
        >
            <h1 className='m-auto'>Become a Volunteer</h1>
        </div>
    );
}

//make this component available to the app
export default TopSection
