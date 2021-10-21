import React from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

import Layout from './components/Layout/Layout';

import {Home,About,Customers, DedicatedSolutions, Technologies,AdditionalEquipment,News,Contact,NotFound} from './components/pages';

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/o-nas" component={About} />
          <Route path="/klienci" component={Customers} />
          <Route path="/produkty/:name" render={(props) => <ProductDetails {...props} />} />
          <Route path="/rozwiazania-specjalne/:name" render={(props) => <DedicatedSolutions {...props} />} />
          <Route path="/technologie" component={Technologies} />
          <Route path="/dodatkowe-wyposazenie" component={AdditionalEquipment} />
          <Route path="/wiadomosci" component={News} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
  );
};
export default App;
