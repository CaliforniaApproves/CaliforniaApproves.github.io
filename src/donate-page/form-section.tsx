/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const FormSection = () => {
    return (
        <div className='px-4 py-10 bg-gradient-to-br from-purple to-tan flex flex-col items-center'>
            <script src="https://donorbox.org/widget.js" paypalExpress="false"></script><iframe src="https://donorbox.org/embed/california-approval-voting?default_interval=o&hide_donation_meter=true" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless={true} frameBorder="0" scrolling="no" height="900px" width="100%" style={{maxWidth: "500px", minWidth: "250px", maxHeight:"none!important"}}></iframe>
        </div>
    );
}

//make this component available to the app
export default FormSection
