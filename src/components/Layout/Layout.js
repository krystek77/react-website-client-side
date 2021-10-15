import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../Toolbar/Toolbar';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__topbar">
        <Toolbar />
        <Navigation />
      </div>
      {children}
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
