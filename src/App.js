/* eslint-disable no-unused-vars */
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Toolbar from './components/Toolbar/Toolbar';
import Navigation from './components/Navigation/Navigation';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Customers = React.lazy(() => import('./pages/Customers'));
const Products = React.lazy(() => import('./pages/Products'));
const DedicatedSolutions = React.lazy(() => import('./pages/DedicatedSolutions'));
const Technologies = React.lazy(() => import('./pages/Technologies'));
const AdditionalEquipment = React.lazy(() => import('./pages/AdditionalEquipment'));
const PostDetails = React.lazy(() => import('./pages/PostDetails'));
const News = React.lazy(() => import('./pages/News'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Signin = React.lazy(() => import('./pages/Signin'));
const NotFound = React.lazy(() => import('./pages/404'));
const CreateAccount = React.lazy(() => import('./pages/admin/CreateAccount'));

import Newsletter from './components/Newsletter/Newsletter';
import Gallery from './components/Gallery/Gallery';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Ładowanie ... </div>}>
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
        <Gallery />
        <ContactForm />
        <Footer />
      </Suspense>
    </Layout>
  );
};
export default App;
