/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import { Grid } from '@mui/material';
import useStyles from './styles';

import Post from './Post/Post';

function Posts() {
  const classes = useStyles();
  const posts = useSelector((state)=>state.posts);
  
  useEffect(()=>{
    console.log("mounted posts",posts)
    return ()=>{console.log("unmounted posts")}
  })

  return posts.length!==0 && (
    <Grid className={classes.posts} container>
        {posts.map((post)=>{
          return (
            <Grid className={classes['post-wrapper']} key={post._id} item xs={12} sm={6} md={4} lg={3}><Post post={post}/></Grid>
          )
        })}
    </Grid>
  );
}

export default Posts;
