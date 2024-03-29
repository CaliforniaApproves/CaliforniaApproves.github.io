const plugin = require('tailwindcss/plugin');

const themeColors = {
    transparent: 'transparent'
    , current: 'currentColor'
    , white: '#fff'
    , black: '#27272B'
    , schist: {
        higher: '#27272B'
        , high: '#66666E'
        , medium: '#9999A1'
        , DEFAULT: '#E6E6E9'
        , low: '#f4f4f6'
        , lower: '#ffffff'
    }
    , green: {
        DEFAULT: '#283620'
        , high: '#46543E'
    }
    , purple: {
        DEFAULT: '#8956ff'
        , high: '#A47DFF'
    }
    , orange: {
        DEFAULT: '#f16200'
        , accent: '#d47739'
        , high: '#FF8533'
    }
    , tan: {
        DEFAULT: '#fecb8b'
        , high: '#FFDDB1'
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
                small: ['18px', {
                    lineHeight: '24px'
                    , letter: '-1%'
                    , fontWeight: '400',
                }]
                , base: ['22px', {
                    lineHeight: '30px'
                    , letter: '-1%'
                    , fontWeight: '400',
                }]
                , large: ['26px', {
                    lineHeight: '38px'
                    , letter: '-1%'
                    , fontWeight: '400',
                }]
                , "large-bold": ['26px', {
                    lineHeight: '32px'
                    , letter: '-1%'
                    , fontWeight: '500',
                }]
                , bsm: ['20px', '20px']
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
    ]
};
