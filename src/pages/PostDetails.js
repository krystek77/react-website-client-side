/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';
import { Divider, Button } from '@mui/material';
import {KeyboardReturn} from '@mui/icons-material';
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
      <div>
        <span>ID: {post._id}</span>
        <p>{moment(post.createdAt).calendar()}</p>
        <h2>{post.title}</h2>
        <p>{post.contents}</p>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
        <div>Autor: {post.author.firstName}</div>
        <Divider light/>
        <Button component={Link} to="/wiadomosci" variant="contained" size="small" startIcon={<KeyboardReturn />}>
          Wszystkie wiadomości
        </Button>
      </div>
    </React.Fragment>
  ) : null;
}
export default PostDetails;
