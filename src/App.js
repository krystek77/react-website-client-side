import React from 'react';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';

import Layout from './components/Layout/Layout';

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/o-nas" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona o nas</h1>} />
          <Route path="/klienci" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona klienci</h1>} />
          <Route path="/produkty/:name" render={(props) => <ProductDetails {...props} />} />
          <Route path="/technologie" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona technologie</h1>} />
          <Route path="/akcesoria" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona akcesoria</h1>} />
          <Route path="/wiadomosci" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona widaomosci</h1>} />
          <Route path="/kontakt" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona kontakt</h1>} />
          <Route path="/" render={() => <h1 style={{flexGrow:1,display:'flex',justifyContent:'center',alignItems:'center'}}>strona startowa</h1>} />
        </Switch>
      </Layout>
  );
};
export default App;
