/* ****** CAA Imports ****** */
// UI
import Input from '../components/common/input';
import { ActionButton } from '../components/common/buttons';

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { useState } from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated

// create a component
const MailingForm = () => {
    const [email, setEmail] = useState<string>('');
    return (
        <div className='bg-white border-purple rounded-[50px] border-[6px] p-12 text-center flex flex-col items-center'>
            <h2 className='truncate text-green'>
                Bring Approval <br/>Voting To California
            </h2>
            <p className='text-small'>
                We are creating a movement for a better democracy in California. Sign up for our newsletter to stay up to date on news, initiatives, ballot reforms and more 
            </p>
            <br/>
            <Input
                color="purple"
                value={email}
                setValue={setEmail}
                label="email"
                labelHidden={true}
                type='email'
                placeholder='Enter your email'
                className='w-full'
            />
            <br/>
            <ActionButton
                color='purple'
                variant='outlined'
                onClick={() => {}}
                className="text-purple"
                size='lg'
            >
                JOIN US
            </ActionButton>
            <br/>
            <p className='italic text-small'>
                By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our organization.
            </p>
        </div>
    );
}

//make this component available to the app
export default MailingForm
