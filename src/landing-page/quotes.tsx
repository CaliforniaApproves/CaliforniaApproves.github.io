/* ****** CAA Imports ****** */
// UI
import Carousel from '../components/common/carousel';
// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React from 'react'
import update from 'immutability-helper';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated
type Quote = {
    quote: string;
    source: string;
}
const placeholderQuotes: Quote[] = [
    {
        quote: 'Approval voting is a simple way to have more candidates who represent our interests. A nice side-effect is that they also get along with each other better.'
        , source: 'Jim McKelvey, St. Louis, MO'
    }
    , {
        quote: 'I love approval voting!'
        , source: 'Kevin Gray, San Francisco, CA'
    }
]

// create a component
const Quotes = () => {
    return (
        <div className='bg-orange px-8 lg:px-[180px] py-[112px]'>
            <Carousel className="m-auto" color="tan">
                { placeholderQuotes.map((quote, index) =>
                    <div key={index} className="lg:max-w-[50%] text-white hover:text-white">
                        <h2>{quote.quote}</h2>
                        <br/>
                        <h2>{quote.source}</h2>
                    </div>
                ) }
            </Carousel>
        </div>
    );
}

//make this component available to the app
export default Quotes
