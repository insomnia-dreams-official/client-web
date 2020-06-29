const colors = {
    blue: '#155094',
    blue_dark: '#0f3a7d',
    gray: '#555',
    gray_lightest: '#ECF0F1', // background
    gray_dark: '#333',
    gray_light: '#ccc', // side-navigation arrows
    black: '#0e1111',
    white: '#FFF',
};
const theme = {
    colors,
    sizes: {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1300px',
        desktop: '2560px',
    },
    borders: [
        0,
        '1px solid',
        '2px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid',
    ],
    radii: [0, '2px', '4px', '8px', '16px', '50%', '100%'],
    space: [
        0, 4, 8, 16, 32, 64, 128, 256
    ],
    width: [16, 32, 64, 128, 256],
    heights: [16, 32, 64, 128, 256],
    button: {
        size: {
            xs: {
                height: '16px',
                padding: '0 16px',
                fontSize: '10px'
            },
            sm: {
                height: '24px',
                padding: '0 24px',
                fontSize: '13px'
            },
            md: {
                height: '34px',
                padding: '0 34px',
                fontSize: '14px',
                letterSpacing: '0.4px'
            },
            lg: {
                height: '56px',
                padding: '0 56px',
                fontSize: '20px'
            },
            default: {
                height: '24px',
                padding: '0 30px',
                fontSize: '13px'
            },
        },
        color: {
            blue_transparent: {
                color: colors.blue,
                borderColor: colors.blue,
                background: 'transparent',
                hover: {
                    color: colors.gray_lightest,
                    background: colors.blue,
                },
            },
            blue: {
                color: colors.gray_lightest,
                background: colors.blue,
                hover: {
                    color: colors.gray_lightest, // color is the same
                    background: colors.blue_dark,
                },
            },
        }
    },
    animation: {
        transition: '0.2s'
    },
    fontSizes: [
        12, 14, 16, 20, 24, 32, 48, 64, 72, 96
    ],
    sideNavigation: {
        width: '200px'
    },
    shadow: '0 1px 5px rgba(0,0,0,.3)'
}

export default theme