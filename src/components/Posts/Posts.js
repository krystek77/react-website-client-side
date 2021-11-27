import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Grid } from '@mui/material';
import Post from './Post/Post';
import Loading from '../Loading/Loading';
import Feedback from '../Feedback/Feedback';

import useStyles from './styles';

function Posts({ setCurrentPostID }) {
  const { posts, isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(posts);

  useEffect(() => {
    console.log('[Posts.js] - mounted');
    dispatch(getPosts());
    return () => {
      console.log('[Posts.js] - unmounted');
    };
  }, [dispatch]);

  if (isLoading) return <Loading message="Ładowanie wiadomości" />;
  if (!posts.length && !isLoading) return <Feedback message="--- Brak wiadomości ---" />;

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
  setCurrentPostID: PropTypes.func,
};

export default Posts;
