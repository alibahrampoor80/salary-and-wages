import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import theme from './themeFile/theme';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {CacheProvider} from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {SnackbarProvider} from "notistack";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';



const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter >
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                        <CssBaseline/>
                        <SnackbarProvider maxSnack={100}>
                            <App/>
                        </SnackbarProvider>
                    </LocalizationProvider>
                </ThemeProvider>
            </CacheProvider>
        </BrowserRouter>
    </React.StrictMode>,
);