/* ****** CAA Imports ****** */
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
type LinkColor = 'orange'|'purple'|'green'|'black'|'white';

type CaaLinkProps = {
    className?: string;
    to: string;
    color: LinkColor;
    target?: string;
};

// create a component
const CaaLink = ({to, children, color, target, className=''}: PropsWithChildren<CaaLinkProps>) => {
    const classNames = classnames(
        'caa-link'
        , {
            'text-orange hover:text-orange-high': color === 'orange'
            , 'text-purple hover:text-purple-high': color === 'purple'
            , 'text-green hover:text-green-high': color === 'green'
            , 'text-black hover:text-schist-high': color === 'black'
            , 'text-white hover:text-schist-low': color === 'white'
        }
        , className
    )
    return (
        <Link
            to={to}
            className={classNames}
            target={target}
        >
            {children}
        </Link>
    );
}

//make this component available to the app
export default CaaLink
