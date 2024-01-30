/* ****** CAA Imports ****** */
// UI
import Link from '../components/common/links';

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */
import Background from '../assets/images/Illustrations-1.png';
import Arrow from '../assets/icons/Arrow.svg?react';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const About = () => {
    return (
        <div
            className='flex flex-col align-center items-center pb-28 px-8'
            style={{
                backgroundImage: `url(${Background})`
                , backgroundRepeat: 'no-repeat'
                , backgroundPositionY: "bottom"
            }}
        >
            <h1 className='text-green text-center my-16'>
                How We Are Making Waves
            </h1>
            <div className='flex flex-col lg:flex-row align-center'>
                <div className='bg-purple text-white lg:w-80 p-[50px] rounded-t-2xl lg:rounded-t-none lg:rounded-bl-2xl h-[80%] lg:mb-10'>
                    <h2>
                        Education
                    </h2>
                    <p className="text-base">
                        The road to better democracy starts with awareness. We offer live expert-led presentations for political organizations, professional unions, and more.
                    </p>
                    <br/>
                    <Link
                        to='https://calendly.com/alan-approves/30min'
                        target="_blank"
                        color="white"
                        className='italic underline flex flex-row text-small align-center items-center text-center'
                    >
                        BOOK NOW
                        <Arrow className="fill-current w-6 h-6 ml-2"/>
                    </Link>
                </div>
                <div className='bg-orange text-white lg:w-80 p-[50px] lg:rounded-b-2xl'>
                    <h2>
                        Campaigning
                    </h2>
                    <p className="text-base">
                        Let us help bring approval voting to your city. As an FPPC-approved committee, we are the only organization in California that can directly fund your campaign.
                    </p>
                    <br/>
                    <Link
                        to='#'
                        color="white"
                        className='italic underline flex flex-row text-small align-center items-center text-center'
                    >
                        LEARN MORE
                        <Arrow className="fill-current w-6 h-6 ml-2"/>
                    </Link>
                </div>
                <div className='bg-green text-white lg:w-80 p-[50px] rounded-b-2xl lg:rounded-bl-none lg:rounded-br-2xl h-[80%] lg:mb-10'>
                    <h2>
                        Community
                    </h2>
                    <p className="text-base">
                        Live in an area where partisanship has made the electoral process unrepresentative of your community? Use our platform to share your story and get connected.
                    </p>
                    <br/>
                    <Link
                        to='mailto:info@californiaapproves.org'
                        color="white"
                        target="_blank"
                        className='italic underline flex flex-row text-small align-center items-center text-center'
                    >
                        GET IN TOUCH
                        <Arrow className="fill-current w-6 h-6 ml-2"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

//make this component available to the app
export default About
