const plugin = require('tailwindcss/plugin');

const themeColors = {
    transparent: 'transparent'
    , current: 'currentColor'
    , white: '#fff'
    , black: 'var(--color-schist-higher)'
    , schist: {
        higher: 'var(--color-schist-higher)'
        , high: 'var(--color-schist-high)'
        , medium: 'var(--color-schist-medium)'
        , DEFAULT: 'var(--color-schist-default)'
        , low: 'var(--color-schist-low)'
        , lowest: 'var(--color-schist-lowest)'
    }
    , green: {
        DEFAULT: 'var(--color-green-default)'
    }
    , purple: {
        DEFAULT: 'var(--color-purple-default)'
    }
    , orange: {
        DEFAULT: 'var(--color-orange-default)'
        , accent: 'var(--color-orange-accent)'
    }
    , tan: {
        DEFAULT: 'var(--color-tan-default)'
    }
};

const themeExtensions = {
    colors: themeColors
    , textColor: themeColors
    , backgroundColor: themeColors
    , borderColor: themeColors
};

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/\\@twist/nucleic-ui-components/dist/**/*.{js,ts,jsx,tsx}']
    , darkMode: 'class' // or 'media' or 'class'
    , theme: {
        extend: {
            ...themeExtensions
            , fontSize: {
                bsm: ['20px', '20px']
                , bsl: ['22px', '26px']
            }
            , fontFamily: {
                darker: ['Darker Grotesque']
            }
        }
    }
    , plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        })
        , require('@tailwindcss/aspect-ratio')
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
