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
import Background from '../assets/images/Background-Pattern.svg';
import LightBox from '../assets/placeholders/Lightbox.png';
import { ReactComponent as Arrow } from '../assets/icons/Arrow.svg';

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const Video = () => {
    return (
        <div
            className="caa-home-page-video w-full flex flex-col items-center justify-center py-16 px-4"
            style={{
                backgroundImage: `url(${Background})`
                , backgroundSize: 'cover'
                , backgroundRepeat: 'no-repeat'
            }}
        >
            <img src={LightBox} alt="video placeholder"/>
            <br/>
            <p className='text-large-bold text-center m-auto max-w-[768px]'>
                Approval voting is a single-winner voting method that allows voters to choose as many candidates as they wish. The candidate with the most votes wins.
            </p>
            <br/>
            <Link
                to="#"
                color="orange"
                className="flex flex-row text-small align-center items-center text-center"
            >
                LEARN MORE HERE
                <Arrow className="fill-current w-6 h-6 ml-2"/>
            </Link>
        </div>
    );
}

//make this component available to the app
export default Video
