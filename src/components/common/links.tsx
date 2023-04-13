/* ****** Twist Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI
import { Link } from "react-router-dom";

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';
import classnames from 'classnames';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated
type LinkColor = 'orange'|'purple'|'green'|'black';

type CaaLinkProps = {
    className?: string;
    to: string;
    color: LinkColor;
};

// create a component
const CaaLink = ({to, children, color, className=''}: PropsWithChildren<CaaLinkProps>) => {
    const classNames = classnames(
        'caa-link'
        , {
            'text-orange': color === 'orange'
            , 'text-purple': color === 'purple'
            , 'text-green': color === 'green'
            , 'text-black': color === 'black'
        }
        , className
    )
    return (
        <Link
            to={to}
            className={classNames}
        >
            {children}
        </Link>
    );
}

//make this component available to the app
export default CaaLink
