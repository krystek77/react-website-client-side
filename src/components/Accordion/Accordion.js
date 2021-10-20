import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '../ToggleButton/ToggleButton';

import './Accordion.css';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccordion() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion">
      <div className="accordion__header">
        <h5>{title}</h5>
        <ToggleButton state={isOpen} action={toggleAccordion} withLabel />
      </div>
      <div className={`accordion__content ${isOpen ? 'accordion__content--visible' : ''}`}>{children}</div>
    </div>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Accordion;
