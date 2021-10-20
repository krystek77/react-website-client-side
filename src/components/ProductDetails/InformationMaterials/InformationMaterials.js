/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { PictureAsPdf } from '@mui/icons-material';

import './InformationMaterials.css';

function InformationMaterials({ data }) {
  return (
    data.length !== 0 && (
      <ul className="information-materials">
        {data.map((item) => {
          const { id, label, src } = item;
          return (
            <li className="information-materials__item" key={id}>
              <a className="information-materials__link" role="button" href={`../assets/pdf/${src}.pdf`} target="_blank" rel="noreferrer">
                <span className="information-materials__icon">
                  <PictureAsPdf fontSize="large" />
                </span>
                <span className="information-materials__label">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    )
  );
}

InformationMaterials.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};
export default InformationMaterials;
