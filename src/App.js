import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

import Toolbar from './components/Toolbar/Toolbar';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Toolbar/>
      <Navigation/>
      <Switch>
        <Route path="/produkty/:name" render={(props) => <ProductDetails {...props} />} />
        <Route path="/" render={() => <h1>Home Page</h1>} />
      </Switch>
      <Footer/>
    </Router>
  );
};
export default App;
