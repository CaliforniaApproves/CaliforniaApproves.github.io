const plugin = require('tailwindcss/plugin');

const themeColors = {
    transparent: 'transparent'
    , current: 'currentColor'
    , white: '#fff'
    , black: '#000'
    , surface: 'var(--bg-surface-default)'
    , schist: {
        higher: 'var(--color-schist-higher)'
        , high: 'var(--color-schist-high)'
        , medium: 'var(--color-schist-medium)'
        , DEFAULT: 'var(--color-schist-default)'
        , low: 'var(--color-schist-low)'
        , lowest: 'var(--color-schist-lowest)'
    }
    , primary: {
        high: 'var(--color-primary-high)'
        , medium: 'var(--color-primary-medium)'
        , DEFAULT: 'var(--color-primary-default)'
        , low: 'var(--color-primary-low)'
        , lowest: 'var(--color-primary-lowest)'
    }
    , secondary: {
        high: 'var(--color-secondary-high)'
        , medium: 'var(--color-secondary-medium)'
        , DEFAULT: 'var(--color-secondary-default)'
        , low: 'var(--color-secondary-low)'
        , lowest: 'var(--color-secondary-lowest)'
    }
    , warning: {
        high: 'var(--color-warning-high)'
        , medium: 'var(--color-warning-medium)'
        , DEFAULT: 'var(--color-warning-default)'
        , low: 'var(--color-warning-low)'
        , lowest: 'var(--color-warning-lowest)'
    }
    , error: {
        high: 'var(--color-error-high)'
        , medium: 'var(--color-error-medium)'
        , DEFAULT: 'var(--color-error-default)'
        , low: 'var(--color-error-low)'
        , lowest: 'var(--color-error-high)'
    }
    , success: {
        high: 'var(--color-sucess-high)'
        , medium: 'var(--color-sucess-medium)'
        , DEFAULT: 'var(--color-sucess-default)'
        , low: 'var(--color-sucess-low)'
        , lowest: 'var(--color-sucess-lowest)'
    }
};

const textColors = {
    schist: {
        high: 'var(--text-schist-high)'
        , medium: 'var(--text-schist-medium)'
        , DEFAULT: 'var(--text-schist-default)'
        , low: 'var(--text-schist-low)'
        , inverted: 'var(--text-schist-inverted)'
    }
    , primary: {
        high: 'var(--text-primary-high)'
        , medium: 'var(--text-primary-medium)'
        , DEFAULT: 'var(--text-primary-default)'
    }
    , warning: {
        high: 'var(--text-warning-high)'
        , medium: 'var(--text-warning-medium)'
    }
    , error: {
        high: 'var(--text-error-high)'
        , medium: 'var(--text-error-medium)'
    }
    , 'filt': 'var(--color-success-high)' /* focused input label text */
    , 'eit': 'var(--color-error-medium)' /* error input text */
    , 'edt': 'var(--color-error-default)' /* error default text */
    , 'ihtet': 'rgb(0 0 0 / 70%)' /* input helper text error text */
    , 'active-sidebar-icon': 'var(--color-secondary-medium)'
};

const backgroundColors = {
    surface: {
        higher: 'var(--bg-surface-higher)'
        , high: 'var(--bg-surface-high)'
        , medium: 'var(--bg-surface-medium)'
        , DEFAULT: 'var(--bg-surface-default)'
        , inverted: 'var(--bg-surface-inverted)'
    }
    , primary: {
        medium: 'var(--bg-primary-medium)'
        , DEFAULT: 'var(--bg-primary-default)'
        , low: 'var(--bg-primary-low)'
        , lower: 'var(--bg-primary-lower)'
    }
    , secondary: {
        medium: 'var(--bg-secondary-medium)'
        , DEFAULT: 'var(--bg-secondary-default)'
        , low: 'var(--bg-secondary-low)'
    }
    , success: {
        medium: 'var(--bg-success-medium)'
        , DEFAULT: 'var(--bg-success-default)'
    }
    , warning: {
        medium: 'var(--bg-warning-medium)'
        , DEFAULT: 'var(--bg-warning-default)'
    }
    , error: {
        medium: 'var(--bg-error-medium)'
        , DEFAULT: 'var(--bg-error-default)'
    }
    , overlay: {
        DEFAULT: 'rgba(var(--bg-overlay))'
        , error: 'rgba(var(--bg-overlay-error))'
    }
    , 'crbc': 'var(--color-primary-low)' /* checked radio button container background */
    , 'ibg': 'var(--bg-surface-default)' /* input background */
    , 'blibg': 'rgb(255 255 255 / 30%)' /* bottomLined input background */
    , 'blifbg': 'var(--color-success-high)' /* bottomLined input background */
    , 'ihtebg': 'var(--color-error-medium)' /* input helper text error background */
    , 'qtsnat': 'var(--color-schist-low)' /* qew task side nav active task*/
    , 'qtc': 'var(--color-primary-lower)' /* qew-task-completed */
    , 'eqt-l': 'var(--color-error-low)' /* erroring element background light mode */
    , 'eqt-d': '#4b1e1e' /* erroring element background dark mode */
    , 'aqt-l': '#f2fffe' /* active qew task background light mode */
    , 'aqt-d': '#002f2b' /* active qew task background dark mode */
};

const borderColors = {
    outline: {
        medium: 'var(--border-outline-medium)'
        , DEFAULT: 'var(--border-outline-default)'
    }
    , primary: {
        DEFAULT: 'var(--border-primary-default)'
    }
    , error: {
        DEFAULT: 'var(--border-error-default)'
    }
    , crbc: 'var(--color-primary-default);' /* checked radio button container border */
    , ib: 'rgb(255 255 255 / 30%);' /* input border */
    , eib: 'var(--color-error-medium)' /* error input border */
    , ihtb: 'var(--color-primary-high)' /* input helper text border */
    , aqt: 'var(--color-primary-medium)' /* active qew task */
    , qtno: 'var(--color-schist-default)' /* qew task number outline */
};

const themeExtensions = {
    boxShadow: {
        tihh: 'inset 0px 0px 0px 1px var(--bg-surface-inverted)' /* text input hover highlight */
        , ihh: '0px 0px 3px 1px var(--color-secondary-high)' /* radio/checkbox input hover highlight */
        , crbsh: '0px 0px 0.5px 1px var(--color-primary-medium)' /* checked radio button border-smoothing highlight */
        , ibh: 'inset 0px 0px 0px 1px var(--color-schist-high)' /* input border highlight */
        , fibh: 'inset 0px 0px 0px 2px var(--color-success-medium)' /* focused input border highlight */
        , eibh: 'inset 0px 0px 0px 1px var(--color-error-medium)' /* error input border highlight */
        , ihtbh: '0 2px 2px 1px var(--bg-surface-higher)' /* input helper text border shadow */
        , bsabs: 'inset 0 0 30px 10px var(--color-success-high)' /* barcode scanner active border shadow */
        , 'd-bsabs': 'inset 0 0 30px 10px var(--color-secondary-medium)' /* barcode scanner active border shadow dark mode */
        , bhh: 'inset 0px 0px 0px 1px var(--color-success-high)' /* button hover highlight */
    }
    , keyframes: {
        'pseudo-rotation': { /* LoadingSpinner */
            '0%': { transform: 'scaleX(1)' }
            , '50%': { transform: 'scaleX(-1)' }
        }
        , 'pulse': { /* active barcode scanner */
            '0%': { opacity: 1 }
            , '100%': { opacity: 0.3 }
        }
    }
    , animation: {
        'nucleic-spin': 'pseudo-rotation 0.45s linear infinite' /* animation for spinner */
        , 'nucleic-pulse': 'pulse 1.2s linear infinite' /* animation for active barcode scanner */
    }
    , height: {
        '2px': '2px'
        , '17': '4.25rem'
        , '18': '4.5rem'
    }
    , minHeight: {
        '1px': '1px'
        , '2px': '2px'
        , '0': '0'
        , '1/4': '25%'
        , '1/2': '50%'
        , '3/4': '75%'
        , 'full': '100%'
        , 'input': '2.25em'
    }
    , maxHeight: {
        '1px': '1px'
        , '2px': '2px'
        , '104': '26rem'
        , '112': '28rem'
    }
    , transitionProperty: {
        'height': 'height'
        , 'width': 'width'
        , 'opacity': 'opacity'
    }
    , margin: {
        '2px': '2px'
    }
    , padding: {
        '2px': '2px'
        , '4px': '4px'
        , '5px': '5px'
    }
    , flexGrow: {
        '0': 0
        , '1': 1
        , '2': 2
        , '3': 3
        , '4': 4
        , '5': 5
        , '6': 6
        , '7': 7
        , '8': 8
    }
    , colors: themeColors
    , textColors
    , backgroundColors
    , borderColors
};

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/\\@twist/nucleic-ui-components/dist/**/*.{js,ts,jsx,tsx}']
    , darkMode: 'class' // or 'media' or 'class'
    , theme: {
        extend: {
            ...themeExtensions
        }
    }
    , plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        })
        , plugin(function ({ addBase, theme }) {
            addBase({
                'h1': { fontSize: '2.5rem' }
                , 'h2': { fontSize: '2rem' }
                , 'h3': { fontSize: '1.75rem' }
                , 'h4': { fontSize: '1.5rem' }
                , 'h5': { fontSize: '1.25rem' }
                , 'h6': { fontSize: '1rem' }
            });
        })
    ]
};
