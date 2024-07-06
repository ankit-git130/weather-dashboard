import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4a90e2', // Blue
        },
        secondary: {
            main: '#ff7043', // Orange
        },
        background: {
            default: 'fbf8cc', //  Bright blue
        },
        text: {
            primary: '#333', // Dark grey
            secondary: '#555', // Medium grey
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h3: {
            fontWeight: 700,
            color: '#333',
        },
        h5: {
            fontWeight: 600,
            color: '#4a90e2',
        },
        h6: {
            fontWeight: 500,
            color: '#ff7043',
        },
    },
});

export default theme;
