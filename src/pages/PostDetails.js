/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Chip, Divider, Button, IconButton } from '@mui/material';
import { KeyboardReturn, Favorite, Delete } from '@mui/icons-material';
import useStyles from '../styles/PostDetails';
import moment from 'moment';
import 'moment/locale/pl';

import { useDispatch, useSelector } from 'react-redux';
import { getPostById, deletePost, likePost } from '../actions/posts';

moment.locale('pl');

import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading/Loading';

function PostDetails() {
  const { isLoading, post } = useSelector((state) => {
    console.log('Invoke useSelector from PostDetails');
    return state.posts;
  });
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useNavigate();

  const classes = useStyles();

  useEffect(() => {
    console.log('[PostDetails] - mounted');
    dispatch(getPostById(id));
    return () => {
      console.log('[PostDetails] - mounted');
    };
  }, [dispatch, id]);

  if (isLoading) return <Loading mt={48} message="Pobieranie szczegółów ..." />;
  console.log('PostDetails RELOAD');
  console.log(post);

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
    history('/wiadomosci');
  };

  return post ? (
    <React.Fragment>
      <Hero title={post.title} bgBase64={post.selectedImage} mt={48} />
      <Container fixed className={classes.post}>
        <Typography className={classes.postData} variant="body2">
          Data utworzenia: {moment(post.createdAt).calendar()}
        </Typography>
        <Typography className={classes.postTitle} variant="h4" component="h2">
          {post.title}
        </Typography>
        <Typography className={classes.postContents}>{post.contents}</Typography>
        {post.tags.map((tag) => (
          <Chip className={classes.postTag} key={tag} label={tag} variant="filled" size="small" />
        ))}
        <Typography className={classes.postAuthor} variant="caption" component="p">
          autor:
          <Typography className={classes.postAuthorName} component="span" variant="caption">
            {post.author.firstName}
          </Typography>
        </Typography>
        <Divider className={classes.postDivider} light />
        <Button onClick={() => dispatch(likePost(post._id))} disabled={!userProfile || userProfile?.user._id === post.author._id} className={`${classes['post__btn']} ${classes['post__btn--favorite']}`} startIcon={<Favorite />}>
          {post.likes.length}
        </Button>
        <IconButton disabled={!userProfile || !(userProfile?.user._id === post.author._id)} onClick={handleDeletePost} color="secondary" className={`${classes['post__btn']} ${classes['post__btn--delete']}`}>
          <Delete />
        </IconButton>
        <Divider className={classes.postDivider} light />
        <Button className={classes.postReturnButton} component={Link} to="/wiadomosci" variant="contained" size="small" startIcon={<KeyboardReturn />}>
          Wszystkie wiadomości
        </Button>
      </Container>
    </React.Fragment>
  ) : null;
}
export default PostDetails;
