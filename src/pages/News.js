/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Container, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, Button, Pagination, PaginationItem } from '@mui/material';

import Hero from '../components/Hero/Hero';
import PostForm from '../components/PostForm/PostForm';
import Posts from '../components/Posts/Posts';
import { Search, Tag } from '@mui/icons-material';
import { getPostsBySearch, getPosts } from '../actions/posts';
import useStyles from '../styles/news';

const useQuery = (searchQuery) => {
  return new URLSearchParams(searchQuery);
};

function News() {
  const classes = useStyles();
  const [currentPostID, setCurrentPostID] = useState(null);
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState('');
  const query = useQuery(useLocation().search);
  const page = parseInt(query.get('page')) || 1;
  const history = useNavigate();
  const dispatch = useDispatch();

  const {numberOfPages} = useSelector((state)=>state.posts)

  const handleSearch = (e) => {
    if (e.charCode === 13) {
      searchPosts();
    }
  };
  const handleTags = (e) => {
    const tags = e.target.value.replace(' ', '');
    setTags(tags);
  };
  const searchPosts = (e) => {
    if (search.trim() || tags) {
      console.log('search posts ...');
      dispatch(getPostsBySearch({ search: search, tags: tags }));
      history(`/wiadomosci/szukaj?searchQuery=${search || 'none'}&tags=${tags || ''}`);
    } else {
      dispatch(getPosts(page));
      history('/wiadomosci');
    }
  };

  
  console.log("NEWS RELOADED");

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
            <Posts setCurrentPostID={setCurrentPostID} page={page}/>

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

          <Container className={classes.pageNewsPagination}>
            <Pagination
              count={numberOfPages}
              page={page}
              onChange={() => {
                console.log('change page');
              }}
              variant="outlined"
              shape="rounded"
              renderItem={(item) => <PaginationItem {...item} component={Link} to={`/wiadomosci?page=${item.page}`} />}
            />
          </Container>
        </Container>
      </Container>
    </React.Fragment>
  );
}
export default News;
