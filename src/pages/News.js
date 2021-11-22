/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';

import { Container, Typography } from '@mui/material';
import Hero from '../components/Hero/Hero';
import PostForm from '../components/PostForm/PostForm';
import Posts from '../components/Posts/Posts';

import useStyles from '../styles/news';

function News() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentPostID,setCurrentPostID] = useState(null);


  useEffect(() => {
    console.log("[News.js]- mounted");
    console.log(currentPostID)
    dispatch(getPosts());
    return () => {console.log("[News.js]-unmounted")};
  }, [dispatch,currentPostID]);

  return (
      <React.Fragment>
        
        <Hero title="Bądź na bieżąco" subtitle="wszystko co warto wiedzieć w pralnictwie" blendColor="green" />
        <Container maxWidth="false" className={`${classes.page} ${classes.pageNews}`}>
          
          {/** form post */}
          <PostForm currentPostID={currentPostID} setCurrentPostID={setCurrentPostID} />
          
          {/** posts */}
          <Container className={classes.pageNewsSection} component="main" maxWidth="false">
            <Container className={classes.pageNewsHeader} component="header" maxWidth="false">
              <Typography className={classes.pageNewsTitle} variant="h2" component="h2">
                Wiadomości
              </Typography>
            </Container>

            <Posts setCurrentPostID={setCurrentPostID}/>
          </Container>
        </Container>

      </React.Fragment>
    
  );
}
export default News;
