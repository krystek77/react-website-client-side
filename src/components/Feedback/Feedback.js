import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

import useStyles from './styles';

function Feedback({ message }) {
  const classes = useStyles();
  return (
    <Typography component="p" variant="h6" className={classes.feedBack}>
      {message}
    </Typography>
  );
}
Feedback.propTypes = {
  message: PropTypes.string,
};
export default Feedback;
