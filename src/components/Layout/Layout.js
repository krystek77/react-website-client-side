import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Toolbar/Toolbar';
import Navigation from '../Navigation/Navigation';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__toolbar">
        <Toolbar />
        <Navigation />
      </div>
      {children}
      <ContactForm/>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
