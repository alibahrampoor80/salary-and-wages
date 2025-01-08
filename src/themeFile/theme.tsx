import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';
import {faIR} from '@mui/x-data-grid/locales';
// A custom theme for this app
const theme = createTheme({

    direction: "rtl",
    typography: {
        fontFamily: 'iranyekan,roboto',
    },
    palette: {
        mode: "light",
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
}, faIR);

export default theme;