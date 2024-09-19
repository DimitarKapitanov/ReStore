// theme.ts

const getDesignTokens = (mode: 'light' | 'dark') => ({
    palette: {
        mode: mode,
        primary: {
            main: '#ffffff',
        },
        background: {
            default: mode === 'light' ? '#F2F0F1' : '#121212b2'
        }
    },
    typography: {
        fontFamily: [
            'Figtree',
            'Satoshi',
        ].join(','),
        h1: {
            fontFamily: '"Figtree", "Arial Black", sans-serif',
            fontSize: '64px',
            fontWeight: 'bolder',
        },
        h2: {
            fontFamily: '"Figtree", "Arial Black", sans-serif',
            fontSize: '48px',
            fontWeight: 'bolder',
        },
        h3: {
            fontFamily: '"Figtree", "Arial Black", sans-serif',
            fontSize: '36px',
            fontWeight: 'bold',
        },
        h4: {
            fontFamily: '"Figtree", "Arial Black", sans-serif',
            fontSize: '24px',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: '"Figtree", "Arial Black", sans-serif',
            fontSize: '20px',
            fontWeight: 'bold',
        },
        h6: {
            fontFamily: '"Figtree", "Arial Black", sans-serif',
            fontSize: '18px',
            fontWeight: 'bold',
        },
        subtitle1: {
            fontSize: '16px',
            color: mode === 'light' ? '#00000099' : '#ffffff',
        },
        subtitle2: {
            fontSize: '14px',
            color: mode === 'light' ? '#00000099' : '#ffffff',
        },
        body1: {
            fontSize: '16px',
        },
        button: {
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '16px',
            fontWeight: 'lighter',
            color: mode === 'light' ? '#000000' : '#ffffff',
        },
    },
});

export default getDesignTokens;


