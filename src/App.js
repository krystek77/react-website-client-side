import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <Router>
      <Navigation/>
      <Switch>
        <Route path="/produkty/:name" render={(props) => <ProductDetails {...props} />} />
        <Route path="/" render={() => <h1>Home Page</h1>} />
      </Switch>
    </Router>
  );
};
export default App;
