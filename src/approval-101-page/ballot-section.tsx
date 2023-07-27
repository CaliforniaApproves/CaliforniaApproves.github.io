/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import ballot from '../assets/images/borderless ballot.png';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const BallotSection = () => {
    return (
        <div className='flex flex-col lg:flex-row px-4 py-10 bg-purple text-white'>
            <div className='lg:w-1/2 my-auto'>
                <h2>
                    {"Our elections don't have to be like this! The solution is"} <strong className='text-tan'>Approval Voting</strong>
                </h2>
                <h5 className='pt-4'>
                    With approval voting, you can vote for all the candidates you want. The candidate with the most votes wins. It’s as simple as that!
                </h5>
            </div>
            <div className='lg:w-1/2'>
                <img src={ballot} alt="sample approval ballot"/>
            </div>
        </div>
    );
}

//make this component available to the app
export default BallotSection
