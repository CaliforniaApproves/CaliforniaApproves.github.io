/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported
import PeopleTalking from '../assets/images/people-talking.png';
import Voting from '../assets/images/votes.png';
import Polling from '../assets/images/polling-place.png';

// Generated

// create a component
const GetInvolved = () => {
    return (
        <div className='flex flex-col items-center'>
            <h4 className='text-purple'>
                READY TO GET INVOLVED?
            </h4>
            <h2 className='text-green'>
                Three Ways You Can Help
            </h2>
            <br/>
            <div className='flex flex-row justify-center text-white'>
                <div
                    className='p-12 w-1/3'
                    style={{
                        background: `url(${PeopleTalking}) 25%, #8956ff`
                        , backgroundSize: 'cover'
                        , backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h3>
                        Join Our Movement
                    </h3>
                    <br/>
                    <p className='text-base'>
                        Our newsletter is your go-to resource for Approval Voting in California. Stay up-to-date on the latest news, events, fundraising initiatives and more.
                    </p>
                </div>
                <div
                    className='p-12 w-1/3'
                    style={{
                        backgroundImage: `url(${Voting})`
                        , backgroundSize: 'cover'
                        , backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h3>
                        Donate
                    </h3>
                    <br/>
                    <p className='text-base'>
                        Every dollar raised is poured  back into communities in California. Consider making a donation to help us fund campaign activities committed to bettering our democracy.
                    </p>
                </div>
                <div
                    className='p-12 w-1/3'
                    style={{
                        backgroundImage: `url(${Polling})`
                        , backgroundSize: 'cover'
                        , backgroundRepeat: 'no-repeat'
                    }}
                >
                    <h3>
                        Volunteer
                    </h3>
                    <br/>
                    <p className='text-base'>
                        Volunteering is the most effective way to get involved and make a difference. Find volunteer opportunities that match your interests and help bring voting reform to a community near you.
                    </p>
                </div>
            </div>
        </div>
    );
}

//make this component available to the app
export default GetInvolved
