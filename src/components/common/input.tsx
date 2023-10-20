/* ****** CAA Imports ****** */
// UI

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
type InputColor = 'orange'|'purple'|'green'|'black';

type InputProps = JSX.IntrinsicElements["input"] & {
    className?: string;
    value: any;
    color: InputColor;
    label?: string;
    labelHidden?: boolean;
    placeholder?: string;
    setValue: (k: string) => void;
};

// create a component
const Input = ({value, setValue, color, type, label, placeholder, labelHidden=false, className=''}: PropsWithChildren<InputProps>) => {
    return (
        <div className={classnames(
            'caa-input'
            , {
                [className]: className != null
            }
        )}>
            <label htmlFor={label} className={classnames({"sr-only": labelHidden})}>
                {label}
            </label>
            <input
                type={type}
                name={label}
                className={classnames(
                    "block w-full rounded-2xl border-0 p-3 text-center text-black shadow-sm ring-1 ring-inset placeholder:text-schist-high focus:ring-2 focus:ring-inset sm:text-sm lg:text-base sm:leading-6 bg-schist"
                    , {
                        "ring-purple focus:ring-purple-high": color === 'purple'
                        , "ring-green focus:ring-green-high": color === 'green'
                        , "ring-orange focus:ring-orange-high": color === 'orange'
                        , "ring-black focus:ring-black-high": color === 'black'
                    }
                )}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            </div>
    );
}

//make this component available to the app
export default Input
