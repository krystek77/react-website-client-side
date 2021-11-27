/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pl';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../actions/posts';

moment.locale('pl');

import Hero from '../components/Hero/Hero';

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

  return post ? (
    <React.Fragment>
      <Hero title={post.title} bgBase64={post.selectedImage} />
      <div>
        <span>ID: {post._id}</span>
        <p>{moment(post.createdAt).calendar()}</p>
        <h2>{post.title}</h2>
        <p>{post.contents}</p>
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </React.Fragment>
  ) : null;
}
export default PostDetails;
