
/* ****** Twist Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI
import { Link } from 'react-router-dom';

// Logic
import React from 'react'
import classnames from 'classnames';

/* ****** Assets ****** */
import { ChevronRightIcon } from '@heroicons/react/solid'

/* ****** Constants ****** */
// Imported
import PropTypes, { InferProps } from 'prop-types';

export interface IBreadCrumbLink {
    displayName: string;
    link: string;
}

// Generated
const propTypes = {
    className: PropTypes.string
    , links: PropTypes.array.isRequired
};

type MyProps = InferProps<typeof propTypes> & {
    links: Array<IBreadCrumbLink>;
}

// create a component
const BreadCumbs = ({links, className}: MyProps) => {
    return (
        <div className="breadcrumbs flex flex-row items-center mb-5">
            <Link key="home" to='/' className="bg-gradient-to-r from-primary-high to-secondary bg-clip-text text-transparent"><h5>CA Approves</h5></Link>
            { links.map((link: IBreadCrumbLink, index: number) => {
                return (
                    <React.Fragment key={`${link.displayName}-${index}`}>
                        <span className="breadcrumb-chevron mx-4" key={`> ${index}`}>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <Link key={index} to={link.link} className="text-primary-high">
                            <h5>{link.displayName && link.displayName}</h5>
                        </Link>
                    </React.Fragment>
                )
            })}
        </div>
    );
}

BreadCumbs.propTypes = propTypes;

BreadCumbs.defaultProps = {
}
//make this component available to the app
export default BreadCumbs;
