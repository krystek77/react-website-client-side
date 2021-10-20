/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import './ToggleButton.css';

function ToggleButton({ state,action,withLabel,rowReverse,column,columnReverse }) {

  function handleEvent() {
    action();
  }

  const label = withLabel ? state ? <span className="toggle-btn__label">zwiń</span> : <span className="toggle-btn__label">rozwiń</span>:null

  return (
    <button type="button" className={`toggle-btn ${rowReverse ? "toggle-btn__row-reverse":column ? "toggle-btn__column":columnReverse ? "toggle-btn__column-reverse":""}`} onClick={handleEvent}>
      {label}
      {state ? (
        <span className="toggle-btn__icon">
          <KeyboardArrowUp />
        </span>
      ) : (
        <span className="toggle-btn__icon">
          <KeyboardArrowDown />
        </span>
      )}
    </button>
  );
}

ToggleButton.propTypes = {
  state: PropTypes.bool,
  action:PropTypes.func,
  withLabel:PropTypes.bool,
  rowReverse:PropTypes.bool,
  column:PropTypes.bool,
  columnReverse:PropTypes.bool,
};
export default ToggleButton;