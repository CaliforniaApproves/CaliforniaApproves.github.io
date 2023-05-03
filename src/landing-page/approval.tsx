/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import Ballot from '../assets/images/Rectangle-102.png';
import { ReactComponent as CheckMark } from '../assets/icons/Yellow-Check.svg';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const AboutApproval = () => {
    return (
        <div className='bg-purple flex flex-row justify-around text-white py-28'>
            <img className="w-fit h-fit" src={Ballot}/>
            <div className='flex flex-col max-w-[50%]'>
                <h1 className='text-white'>
                    Simple, Effective and Affordable Reform
                </h1>
                <p className='text-base text-white'>
                    No confusing algorithms. No expensive new voting machines. Approval voting is an uncomplicated solution that delivers meaningful improvements in the quality of representation and policies.
                </p>
                <br/>
                <div className='flex flex-row items-center'>
                    <CheckMark/>
                    <h3>
                        Prevents Vote-Splitting
                    </h3>
                </div>
                <div className='flex flex-row items-center'>
                    <CheckMark/>
                    <h3>
                        Reduces Hyper-Partisanship
                    </h3>
                </div>
                <div className='flex flex-row items-center'>
                    <CheckMark/>
                    <h3>
                        Elects Better Candidates
                    </h3>
                </div>
                <div className='flex flex-row items-center'>
                    <CheckMark/>
                    <h3>
                        Delivers Fair & Accurate Results
                    </h3>
                </div>
            </div>
        </div>
    );
}

//make this component available to the app
export default AboutApproval
