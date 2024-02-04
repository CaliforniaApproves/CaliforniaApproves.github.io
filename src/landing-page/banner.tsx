/* ****** CAA Imports ****** */
// UI
import MailingForm from './mailing-form';

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import strongArm from '../assets/images/Strong-Arm 1.webp';

/* ****** Constants ****** */
// Imported
import Arrow from '../assets/icons/Long-Arrow.svg?react';
import Background from '../assets/images/Group-39.svg';

// Generated

// create a component
const Banner = () => {
    return (
        <div
            className="caa-home-page-banner w-full flex flex-col lg:flex-row items-center justify-center py-[30px]"
            style={{
                backgroundImage: `url(${Background})`
                , backgroundSize: 'cover'
                , backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='m-auto px-8 pb-4 lg:pb-0'>
                <img src={strongArm} alt="strong arm" width="338" height="316" className='aspect-[169/158]'/>
                <h1 className='no-wrap text-green'>The <span className='text-purple'>Easiest</span> Way To Make</h1>
                <h1 className='text-green'>The <span className='text-purple'>Biggest</span> Impact</h1>
                <div className='static max-w-[500px]'>
                    <Arrow className='absolute'/>
                    <p className='text-large-bold flex flex-row indent-24 font-bold lg:font-normal'>
                        Approval voting gives voters the power to support multiple candidates equally so that stronger representatives with broad support are always elected.
                    </p>
                </div>
            </div>
            <div className='py-[90px] max-w-full lg:max-w-[40%] m-auto bg-purple lg:bg-transparent px-8'>
              <MailingForm />
            </div>
        </div>
    );
}

//make this component available to the app
export default Banner
