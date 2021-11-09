/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';
import { Container, Typography } from '@mui/material';

import Hero from '../components/Hero/Hero';
import PostForm from '../components/PostForm/PostForm';
import Posts from '../components/Posts/Posts';

import useStyles from './styles';

function News() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentPostID,setCurrentPostID] = useState(null);

  useEffect(() => {
    console.log("mounted news")
    dispatch(getPosts());
    return () => {console.log("unmounted news")};
  }, [dispatch,currentPostID]);

  console.log('news');

  return (
    <div className={`${classes['page']} ${classes['page--news']}`}>
      <Hero title="Bądź na bieżąco" subtitle="wszystko co warto wiedzieć w pralnictwie" blendColor="green" />
      <div className={classes['page-wrapper']}>
        {/** form post */}
        <Container className={classes['page__section']} component="section" maxWidth="false">
          <Container className={classes['page__header']} component="header" maxWidth="false">
            <Typography className={`${classes['page__title']} ${classes['page__title--center']}`} variant="h2" component="h2">
              {currentPostID ? "Formularz edytowania wiadomości" : "Formularz dodawania wiadomości"}
            </Typography>
          </Container>

          <Container maxWidth="md">
            <PostForm currentPostID={currentPostID} setCurrentPostID={setCurrentPostID} />
          </Container>
        </Container>

        {/** posts */}

        <Container className={classes['page__section']} component="main" maxWidth="false">
          <Container className={classes['page__header']} component="header" maxWidth="false">
            <Typography className={`${classes['page__title']}`} variant="h2" component="h2">
              Wiadomości
            </Typography>
          </Container>

          <Posts setCurrentPostID={setCurrentPostID}/>
        </Container>
      </div>
    </div>
  );
}
export default News;
