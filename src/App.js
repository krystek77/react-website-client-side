/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import Navigation from './components/Navigation/Navigation';
import { Home, About, Customers, Products, DedicatedSolutions, Technologies, AdditionalEquipment, PostDetails, News, Contact, Signin, NotFound, CreateAccount } from './pages';

import Newsletter from './components/Newsletter/Newsletter';
import Gallery  from './components/Gallery/Gallery';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Layout>
      <Navigation />
      <Toolbar />
      <Routes>
        <Route path="/o-nas" element={<About />} />
        <Route path="/klienci" element={<Customers />} />
        <Route path="/produkty/:name" element={<Products />} />
        <Route path="/rozwiazania-specjalne/:name" element={<DedicatedSolutions />} />
        <Route path="/technologie" element={<Technologies />} />
        <Route path="/dodatkowe-wyposazenie" element={<AdditionalEquipment />} />
        <Route path="/wiadomosci/:id" element={<PostDetails />} />
        <Route path="/wiadomosci/szukaj" element={<News />} />
        <Route path="/wiadomosci" element={<News />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/logowanie" element={<Signin />} />
        <Route path="/admin/utworz-konto-uzytkownika" element={<CreateAccount />} />
        <Route path="/" exact element={<Home />} />
        <Route component={<NotFound />} />
      </Routes>
      <Newsletter />
      <Gallery/>
      <ContactForm />
      <Footer />
    </Layout>
  );
};
export default App;
