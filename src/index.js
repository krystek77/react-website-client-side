/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import App from './App';

import theme from './muitheme'
import store from './store';

// console.log(theme);
// console.log(store.getState());

ReactDOM.render(
  <Router>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
