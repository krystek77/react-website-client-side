/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import App from './App';

import {createStore, combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function postReducer(state=[],action){
  return state;
}

const middleware = [
  thunk
]

const reducers = combineReducers({posts:postReducer})
const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)));

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
console.log(store)

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
