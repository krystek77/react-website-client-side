import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Toolbar/Toolbar';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <Toolbar />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
