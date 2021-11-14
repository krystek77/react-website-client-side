/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';
import Toolbar from './components/Toolbar/Toolbar';
import { Home, About, Customers, Products, DedicatedSolutions, Technologies, AdditionalEquipment, News, Contact, Auth, NotFound } from './pages';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Toolbar />
      <Switch>
        <Route path="/o-nas" component={About} />
        <Route path="/klienci" component={Customers} />
        <Route path="/produkty/:name" render={(props) => <Products {...props} />} />
        <Route path="/rozwiazania-specjalne/:name" render={(props) => <DedicatedSolutions {...props} />} />
        <Route path="/technologie" component={Technologies} />
        <Route path="/dodatkowe-wyposazenie" component={AdditionalEquipment} />
        <Route path="/wiadomosci" component={News} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/autoryzacja" component={Auth} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <ContactForm />
      <Footer />
    </Layout>
  );
};
export default App;
