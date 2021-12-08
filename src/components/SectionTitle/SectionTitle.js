import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import useStyles from './styles';

function SectionTitle({ title }) {
  const classes = useStyles();
  return (
    <Typography className={classes.sectionTitle} component="h2" variant="h2">
      {title}
    </Typography>
  );
}
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
