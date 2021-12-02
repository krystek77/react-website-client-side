/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';


import Hero from '../components/Hero/Hero';
import PostForm from '../components/PostForm/PostForm';
import Posts from '../components/Posts/Posts';
import { Search } from '@mui/icons-material';
import useStyles from '../styles/news';

function News() {
  const classes = useStyles();
  const [currentPostID, setCurrentPostID] = useState(null);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    if (e.charCode === 13) {
      console.log('Search ....');
    }
  };

  useEffect(() => {
    console.log('[News.js]- mounted');

    return () => {
      console.log('[News.js]-unmounted');
    };
  }, [currentPostID]);

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

          <Container maxWidth="false" className={classes.pageNewsPosts}>
            <Posts setCurrentPostID={setCurrentPostID} />

            <div className={classes.pageNewsFilter}>
              <FormControl fullWidth className={classes.pageNewsSearch}>
                <InputLabel htmlFor="search">Szukaj wiadomości</InputLabel>
                <OutlinedInput
                  id="search"
                  type="search"
                  value={search}
                  onKeyPress={handleSearch}
                  onChange={(e) => setSearch(e.target.value)}
                  label="Szukaj wiadomości"
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}
export default News;
