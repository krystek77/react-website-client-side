
import React from 'react';
import PropTypes from 'prop-types';

// import './Layout.css';

function Layout({ children }) {
  return ( <div className="layout">{children}</div> );
}
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
