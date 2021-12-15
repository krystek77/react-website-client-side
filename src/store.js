import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true });

const middleware = [reduxThunk];

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
export default store;
