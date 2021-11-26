
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts'
import { Grid, Typography, CircularProgress } from '@mui/material';
import useStyles from './styles';

import Post from './Post/Post';

function Posts({ setCurrentPostID }) {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(posts)

  useEffect(() => {
    console.log('[Posts.js] - mounted');
    dispatch(getPosts())
    return () => {
      console.log('[Posts.js] - unmounted');
    };
  },[dispatch]);
  //Spinner
  if (isLoading) {
    return (
      <div className={classes.loading}>
        <Typography component="p" variant="h6" className={classes.loadingText}>
          Ładowanie wiadomości ...
        </Typography>
        <CircularProgress className={classes.loadingImage} size={60} />
      </div>
    );
  }
  //Feedback
  if (!posts.length && !isLoading) {
    return (
      <Typography component="p" variant="h6" className={classes.feedBack}>
        --- Brak wiadomości ---
      </Typography>
    );
  }

  return (
    posts.length !== 0 && (
      <Grid className={classes.posts} container>
        {posts.map((post) => {
          return (
            <Grid className={classes['post-wrapper']} key={post._id} item xs={12} sm={6} md={4} lg={3}>
              <Post post={post} setCurrentPostID={setCurrentPostID} />
            </Grid>
          );
        })}
      </Grid>
    )
  );
}

Posts.propTypes = {
  setCurrentPostID:PropTypes.func
}

export default Posts;
