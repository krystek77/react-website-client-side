/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, Button } from '@mui/material';

import Hero from '../components/Hero/Hero';
import PostForm from '../components/PostForm/PostForm';
import Posts from '../components/Posts/Posts';
import { Search, Tag } from '@mui/icons-material';
import useStyles from '../styles/news';

function News() {
  const classes = useStyles();
  const [currentPostID, setCurrentPostID] = useState(null);

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');

  const handleSearch = (e) => {
    if (e.charCode === 13) {
      searchPosts();
    }
  };
  const handleTags = (e) => {
    const tags = e.target.value.replace(' ', '');
    // console.log(tags)
    setTags(tags);
  };
  const searchPosts = (e) => {
    console.log('search posts ...');
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

          <Container maxWidth="xl" className={classes.pageNewsPosts}>
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
                  placeholder="wpisz szukaną frazę"
                  startAdornment={
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl fullWidth className={classes.pageNewsTags}>
                <InputLabel className={classes.pageNewsTagsLabel} htmlFor="tags">
                  Szukaj według tagów
                </InputLabel>
                <OutlinedInput
                  className={classes.pageNewsTagsInput}
                  id="tags"
                  type="text"
                  value={tags}
                  onKeyPress={handleSearch}
                  onChange={handleTags}
                  label="Szukaj według tagów"
                  placeholder="np.: nowe,2021,ewelina"
                  startAdornment={
                    <InputAdornment className={classes.pageNewsTagsIcon} position="start">
                      <Tag />
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button onClick={searchPosts} type="button" fullWidth size="small" variant="contained">
                szukaj
              </Button>
            </div>
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}
export default News;
