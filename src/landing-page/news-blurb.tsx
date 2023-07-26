/* ****** CAA Imports ****** */
// UI
import Link from '../components/common/links';

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
export enum NewsTag {
    News
    , CaseStudy
}
const newsTagMap = {
    [NewsTag.News]: 'NEWS'
    , [NewsTag.CaseStudy]: 'CASE STUDY'
}
export type NewsColors = 'purple'|'orange';

export type NewsBlurbProps = {
    title: string;
    body: string;
    link: string;
    tag: NewsTag;
    color: NewsColors;
};

// create a component
const NewsBlurb = ({title, body, link, tag, color}: PropsWithChildren<NewsBlurbProps>) => {
    return (
        <div className='caa-news-blurb p-12 lg:my-12 mx-2'>
            <div
                className={classnames(
                    'border-t-[6px] lg:w-[512px]'
                    , {
                        'border-purple': color === 'purple'
                        , 'border-orange': color === 'orange'
                    }
                )}
            >
                <br/>
                <h3>
                    {title}
                </h3>
                <br/>
                <p className='text-base'>
                    {body}
                </p>
                <br/>
                <div className='flex flex-row divide-x-2'>
                    <div
                        className={classnames(
                            'mr-4 rounded-2xl border-[3px] px-2 text-center text-bsm font-bold'
                            , {
                                'border-purple text-purple': color === 'purple'
                                , 'border-orange text-orange': color === 'orange'
                            }
                        )}
                    >
                        { newsTagMap[tag] }
                    </div>
                    <Link
                        to={link}
                        color='black'
                        className='underline px-4'
                    >
                        LEARN MORE HERE
                    </Link>
                </div>
            </div>
        </div>

    );
}

//make this component available to the app
export default NewsBlurb
