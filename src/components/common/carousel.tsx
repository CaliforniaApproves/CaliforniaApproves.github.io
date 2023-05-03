/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren, useEffect, useState } from 'react'
import update from 'immutability-helper';
import classNames from 'classnames';

/* ****** Assets ****** */
import { ReactComponent as RightArrow } from '../../assets/icons/Arrow.svg';
import { ReactComponent as LeftArrow } from '../../assets/icons/Back-Arrow.svg';


/* ****** Constants ****** */
// Imported

// Generated
type CarouselColors = 'tan'|'white'|'black';
type CarouselProps = {
    className?: string;
    color: CarouselColors;
};

// create a component
const Carousel = ({color, className='', children=[]}: PropsWithChildren<CarouselProps>) => {
    const [content, setContent] = useState(Array.isArray(children) ? children: [children]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setContent(Array.isArray(children) ? children: [children]);
        setIndex(0);
    }, [children])

    const leftClick = () => {
        if (index === 0) setIndex(content.length - 1);
        else setIndex(index - 1);
    }
    const rightClick = () => {
        if (index === content.length -1) setIndex(0);
        else setIndex(index - 1);
    }
    return (
        <div className={classNames(
            'caa-carousel flex flex-row justify-around items-center'
            , { [className]: className != null }
            , {
                'text-tan hover:text-tan-high': color === 'tan'
                , 'text-white hover:text-schist-low': color === 'white'
                , 'text-black hover:text-schist-high': color === 'black'
            }
        )}>
            <LeftArrow className="fill-current w-14 h-14 mx-2" onClick={leftClick}/>
            {content[index]}
            <RightArrow className="fill-current w-14 h-14 mx-2" onClick={rightClick}/>
        </div>
    );
}

//make this component available to the app
export default Carousel;
