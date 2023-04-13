/* ****** CAA Imports ****** */
// UI

// Logic

/* ****** Other Imports ****** */
// UI

// Logic
import React, { PropsWithChildren } from 'react'
import { useNavigate } from "react-router-dom";
import classnames from 'classnames';

/* ****** Assets ****** */

/* ****** Constants ****** */
// Imported

// Generated
type ButtonVariant = 'solid'|'outlined'|'text';
type ButtonColor = 'orange'|'purple'|'green'|'black';
type ButtonSize = 'sm'|'lg';

type NavButtonProps = {
    variant: ButtonVariant;
    color: ButtonColor;
    size?: ButtonSize
    link: string;
    className?: string;
};

export const NavButton = ({variant, color, size='sm', link, children, className=''}: PropsWithChildren<NavButtonProps>) => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate(link)
    }
    const classNames = classnames(
        'caa-button rounded-2xl px-4 py-2 uppercase flex text-center tracking-[-0.01rem] justify-center font-extrabold'
        , {
            'text-white': variant === 'solid'
            , 'border-[6px]': variant === 'outlined'
        }
        , {
            'bg-orange': variant === 'solid' && color === 'orange'
            , 'bg-purple': variant === 'solid' && color === 'purple'
            , 'bg-green': variant === 'solid' && color === 'purple'
            , 'bg-black': variant === 'solid' && color === 'black'
            , 'border-orange': variant === 'outlined' && color === 'orange'
            , 'border-purple': variant === 'outlined' && color === 'purple'
            , 'border-green': variant === 'outlined' && color === 'purple'
            , 'border-black': variant === 'outlined' && color === 'black'
            , 'text-orange': variant === 'text' && color === 'orange'
            , 'text-purple': variant === 'text' && color === 'purple'
            , 'text-green': variant === 'text' && color === 'purple'
            , 'text-black': variant === 'text' && color === 'black'
        }
        , {
            'text-bsm h-[40px] w-[121px]': size === 'sm'
            , 'text-bsl h-[52px] w-[136px]': size === 'lg'
        }
        , className
    );
    return (
        <div className={classNames} onClick={onClick}>
            {children}
        </div>
    );
}
