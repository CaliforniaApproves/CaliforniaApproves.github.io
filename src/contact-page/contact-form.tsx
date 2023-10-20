/* ****** CAA Imports ****** */
// UI
import Input from '../components/common/input';

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren, useState } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported
import { ReactComponent as Logo } from '../assets/icons/Circles/California-Approves-Logo-Circles-w-Checks-RGB.svg'
import { ActionButton } from '../components/common/buttons';

// Generated

// create a component
const ContactForm = () => {
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();

    return (
        <div className='py-16 text-center flex flex-col'>
            <Logo className='w-40 m-auto'/>
            <h2 className='m-auto'>Effect Change</h2>
            <br/>
            <div className='text-left m-auto max-w-2xl'>
                <h3>Contact Info</h3>
                <p className='text-base'>
                    This is your first step to getting involved in Californian election reform. We will send you our discord link, our virtual meet up link, and an introductory email.
                </p>
                <div className='flex flex-row justify-between'>
                    <div className='w-1/2 mr-4'>
                        <h5>First Name</h5>
                        <Input
                            value={firstName}
                            setValue={setFirstName}
                            color='green'
                        />
                    </div>
                    <div className='w-1/2 ml-4'>
                        <h5>Last Name</h5>
                        <Input
                            value={lastName}
                            setValue={setLastName}
                            color='green'
                        />
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='w-1/2 mr-4'>
                        <h5>Email Address</h5>
                        <Input
                            value={email}
                            setValue={setEmail}
                            color='green'
                            type='email'
                        />
                        <p className='text-sm'>This will not be shared broadly or used to subscribe you to any lists.</p>
                    </div>
                    <ActionButton
                        className='m-auto'
                        variant='outlined'
                        color='purple'
                        onClick={() => {}}
                    >
                        Send
                    </ActionButton>
                </div>
            </div>
        </div>
    );
}

//make this component available to the app
export default ContactForm
