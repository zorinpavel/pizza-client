import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import configStore from './configStore';
import AppRouters from './routers';

import 'assets/scss/root.scss';

const store = configStore();

const pizzaTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#f1c632'
        },
        secondary: {
            main: '#647aae'
        },
        text: {
            primary: '#333333',
        }
    },
});


export default () => (
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={pizzaTheme}>
                <AppRouters />
            </ThemeProvider>
        </Router>
    </Provider>
);
