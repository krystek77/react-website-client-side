/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';

import {Provider} from 'react-redux';
import store from './store'

const theme = createTheme({
  typography:{
  },
  palette:{
    primary:{
      main:"#FF0101",
    },
    secondary:{
      main:"#283845",
    }
  },
});

console.log(theme);
console.log(store.getState());


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
