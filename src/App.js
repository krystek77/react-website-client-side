import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/produkty/:name" render={(props) => <ProductDetails {...props} />} />
          <Route path="/" render={() => <h1>Home Page</h1>} />
        </Switch>
      </Layout>
    </Router>
  );
};
export default App;
