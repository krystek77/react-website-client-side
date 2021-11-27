import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography } from '@mui/material';

import useStyles from './styles';

function Loading(props) {
  const classes = useStyles(props);
  return  (
    <div className={classes.loading}>
      <Typography component="p" variant="h6" className={classes.loadingText}>
        {props.message}
      </Typography>
      <CircularProgress className={classes.loadingImage} size={60} />
    </div>
  );
}
Loading.propTypes = {
  message: PropTypes.string,
  mt:PropTypes.number,
};
export default Loading;
