import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import reducers from './reducers'

const middleware =[reduxThunk]

const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)));
export default store;