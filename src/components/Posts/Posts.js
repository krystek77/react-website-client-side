import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';

import Post from './Post/Post';

function Posts() {
  const classes = useStyles();
  return (
    <Grid className={classes.posts} container>
        <Grid item xs={12} sm={6} md={4} lg={3}><Post/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><Post/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><Post/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><Post/></Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}><Post/></Grid>
    </Grid>
  );
}

export default Posts;
