import React, { useEffect } from 'react';
import useStyles from './styles';
import { Container, Typography } from '@mui/material';

import Hero from '../components/Hero/Hero';
import PostForm from '../components/PostForm/PostForm';
import Posts from '../components/Posts/Posts';

function News() {
  const classes = useStyles();

  useEffect(() => {

    return () => {
    };
  }, []);

  return (
    <div className={`${classes['page']} ${classes['page--news']}`}>
      <Hero title="Bądź na bieżąco" subtitle="wszystko co warto wiedzieć w pralnictwie" blendColor="green" />
      {/** form post */}
      <Container className={classes['page__section']} component="section" maxWidth="false">

        <Container className={classes['page__header']} component="header" maxWidth="false">
          <Typography className={`${classes['page__title']} ${classes['page__title--center']}`} variant="h2" component="h2">
            Formularz dodawania wiadomości
          </Typography>
        </Container>

        <Container maxWidth="md">
          <PostForm/>
        </Container>

      </Container>

      {/** posts */}

      <Container className={classes['page__section']} component="main" maxWidth="false">

        <Container className={classes['page__header']} component="header" maxWidth="false">
          <Typography className={`${classes['page__title']}`} variant="h2" component="h2">
            Wiadomości
          </Typography>
        </Container>

        <Posts />

      </Container>
    </div>
  );
}
export default News;
