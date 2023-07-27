/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import Background from '../assets/images/Illustrations-1.png';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const TopSection = () => {
    return (
        <div className='py-10 px-4 flex flex-col lg:flex-row'
            style={{
                backgroundImage: `url(${Background})`
                , backgroundSize: 'cover'
                , backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='lg:w-1/2 px-4'>
                <h2 className='text-center'>Contact Us</h2>
            </div>
            <div className='lg:w-1/2 px-4 text-base'>
                We would love to hear from you. Whether it’s for getting involved or just questions and clarifications on approval voting, please don’t hesitate to reach out.
            </div>
        </div>
    );
}

//make this component available to the app
export default TopSection
