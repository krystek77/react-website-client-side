/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { Container, Typography, Divider, Button } from '@mui/material';
import {KeyboardReturn} from '@mui/icons-material';
import useStyles  from '../styles/PostDetails';
import moment from 'moment';
import 'moment/locale/pl';

import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../actions/posts';

moment.locale('pl');

import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading/Loading';

function PostDetails() {
  const { isLoading, post } = useSelector((state) => state.posts);
  const { id } = useParams();
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    console.log('[PostDetails] - mounted');
    dispatch(getPostById(id));
    return () => {
      console.log('[PostDetails] - mounted');
    };
  }, [dispatch, id]);

  if(isLoading) return <Loading mt={48} message="Pobieranie szczegółów ..."/>

  return post ? (
    <React.Fragment>
      <Hero title={post.title} bgBase64={post.selectedImage} mt={48} />
      <Container fixed className={classes.post}>
        <span>ID: {post._id}</span>
        <p>{moment(post.createdAt).calendar()}</p>
        <Typography className={classes.postTitle} variant="h4" component="h2">{post.title}</Typography>
        <Typography className={classes.postContents}>{post.contents}</Typography>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
        <div>Autor: {post.author.firstName}</div>
        <Divider className={classes.postDivider} light/>
        <Button component={Link} to="/wiadomosci" variant="contained" size="medium" startIcon={<KeyboardReturn />}>
          Wszystkie wiadomości
        </Button>
      </Container>
    </React.Fragment>
  ) : null;
}
export default PostDetails;
