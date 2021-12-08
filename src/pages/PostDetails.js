/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Container, Grid, Typography, Chip, Divider, Button, IconButton } from '@mui/material';
import { KeyboardReturn, Favorite, Delete } from '@mui/icons-material';
import moment from 'moment';
import 'moment/locale/pl';

import { useDispatch, useSelector } from 'react-redux';
import { getPostById, deletePost, likePost, getPostsBySearch } from '../actions/posts';

moment.locale('pl');

import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Post from '../components/Posts/Post/Post';
import Feedback from '../components/Feedback/Feedback';
import Loading from '../components/Loading/Loading';

import useStyles from '../styles/PostDetails';

function PostDetails() {
  const { isLoading, post, posts } = useSelector((state) => state.posts);
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

  useEffect(() => {
    // console.log('When first mounted and post was changed');
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags }));
    }
    return () => {};
  }, [dispatch, post]);

  if (isLoading) return <Loading mt={48} message="Pobieranie szczegółów ..." />;

  const handleDeletePost = () => {
    dispatch(deletePost(post._id));
    history('/wiadomosci');
  };

  // console.log('PostDetails RELOAD');
  // console.log(post);
  // console.log(posts);
  //remove current post from featured posts
  const featuredPosts = posts.filter((post) => post._id !== id);
  // console.log('featured posts', featuredPosts);

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
      {/** Featured posts */}
      <Grid className={classes.pagePostDetailsFeaturedPosts} container component="section">
        <SectionTitle title="Polecane wiadomości" />
        {featuredPosts.length !== 0 ? (
          featuredPosts.map((post) => {
            return (
              <Grid className={classes.pagePostDetailsFeaturedPostsPost} item key={post._id} xs={12} sm={6} md={4} lg={3}>
                <Post post={post} />
              </Grid>
            );
          })
        ) : (
          <Feedback message="--- brak polecanych wiadomości ---" />
        )}
      </Grid>
      {/**END Featured posts */}
    </React.Fragment>
  ) : null;
}
export default PostDetails;
