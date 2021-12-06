/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { getPosts } from '../actions/posts';
import useStyles from '../styles/home';

import Loading from '../components/Loading/Loading';
import Feedback from '../components/Feedback/Feedback';
import Post from '../components/Posts/Post/Post';

function Home() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts(1));
    return () => {};
  }, [dispatch]);

  if (isLoading) return <Loading message="Ładowanie wiadomości" mt={48} />;
  if (!posts.length && !isLoading) return <Feedback message="--- Brak wiadomości ---" />;
  console.log(posts);
  return (
    <div className="page">
      <span>Home Page</span>

      <Grid className={classes.pageHomeLatestPosts} container component="section">
        <Typography className={classes.pageHomeLatestPostsTitle} component="h2" variant="h2">
          Najnowsze wiadomości
        </Typography>
        {posts.slice(0, 4).map((post) => {
          return (
            <Grid className={classes.pageHomeLatestPostsPost} item key={post._id} xs={12} sm={6} md={6} lg={3}>
              <Post post={post} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Home;
