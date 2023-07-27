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
const ClosingSection = () => {
    return (
        <div className='py-10 px-4'>
            <h2>Approval voting is a simple tweak that offers enormous benefits:</h2>
            <ul className="list-disc pl-10 text-base pt-4">
                <li>If your favorite isn’t the front runner, you can’t vote for them without risking helping your least favorite with. This is called “the spoiler effect”.</li>
                <li>Winning candidates often don’t represent a broad base of voters. It is common for candidates to receive less than 50% of the vote.</li>
                <li>The system is dominated by two parties, leaving no room for new ideas to break through.</li>
            </ul>
        </div>
    );
}

//make this component available to the app
export default ClosingSection
