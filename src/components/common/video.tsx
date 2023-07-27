/* ****** Twist Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';
import classnames from 'classnames';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated
type VideoProps = {
    embedId: string;
    title: string;
    className?: string;
};

// create a component
const Video = ({embedId, title, className}: PropsWithChildren<VideoProps>) => {
    return (
        <div className={classnames("video-responsive", {[className || '']: className != null})}>
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={title}
            />
        </div>
    );
}

//make this component available to the app
export default Video
