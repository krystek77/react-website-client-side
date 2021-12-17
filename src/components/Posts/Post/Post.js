import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ActionTypes from '../../../constants/actionTypes';
import { deletePost, likePost, getPosts } from '../../../actions/posts';

import { Card, CardContent, Typography, IconButton, Button, CardActions, CardMedia, Divider } from '@mui/material';
import { MoreVert, Favorite, Delete, DoubleArrow } from '@mui/icons-material';

import useStyles from './styles';

import moment from 'moment';
import 'moment/locale/pl';
moment.locale('pl');

function Post({ post, page }) {
  const classes = useStyles();
  const { _id, createdAt, selectedImage, title, contents, tags, author, likes } = post;
  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(() => {
    return () => {};
  });

  const setCurrentPostID = (currentPostID) => {
    dispatch({ type: ActionTypes.SET_CURRENT_POST_ID, payload: currentPostID });
    history(`/wiadomosci?page=${page}`);
  };

  const deleteSeclectedPost = (postIdToDelete) => {
    dispatch(deletePost(postIdToDelete));
    dispatch(getPosts(page));
  };

  return (
    <Card className={classes.post} sx={{ margin: '0 16px 16px' }}>
      <div className={classes['post__topbar']}>
        <Typography className={classes['post__date']} variant="body1">
          {moment(createdAt).fromNow()}
        </Typography>

        <IconButton disabled={!userProfile || !(userProfile?.user._id === author._id)} className={`${classes['post__btn']} ${classes['post__btn--edit']}`} onClick={() => setCurrentPostID(_id)}>
          <MoreVert />
        </IconButton>
      </div>
      <CardMedia component="img" image={selectedImage} alt="some image" height="260" />
      <CardContent className={classes['post__content']}>
        <Typography className={classes['post__title']} variant="h6">
          {title}
        </Typography>

        {tags.length !== 0 && (
          <div className={classes['post__tags']}>
            {tags.map((tag) => {
              return (
                <Typography key={tag} className={classes['post__tag']} variant="caption">
                  {`#${tag}`}
                </Typography>
              );
            })}
          </div>
        )}
        <Typography className={classes['post__text']} variant="body2">
          {contents.substring(0, 150).concat(' ...')}
        </Typography>
        <Typography className={classes['post__author']} variant="caption">
          autor: <b>{author?.firstName}</b>{' '}
        </Typography>
      </CardContent>
      <Divider light />
      <CardActions disableSpacing>
        <Button className={`${classes['post__btn']} ${classes['post__btn--more']}`} variant="contained" size="small" component={Link} to={`/wiadomosci/${post._id}`} endIcon={<DoubleArrow />}>
          czytaj
        </Button>
        <React.Fragment>
          <Button onClick={() => dispatch(likePost(_id))} disabled={!userProfile || userProfile?.user._id === author._id} className={`${classes['post__btn']} ${classes['post__btn--favorite']}`} startIcon={<Favorite />}>
            {likes.length}
          </Button>
          <IconButton disabled={!userProfile || !(userProfile?.user._id === author._id)} onClick={() => deleteSeclectedPost(_id)} color="secondary" className={`${classes['post__btn']} ${classes['post__btn--delete']}`}>
            <Delete />
          </IconButton>
        </React.Fragment>
      </CardActions>
    </Card>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string,
    createdAt: PropTypes.string,
    selectedImage: PropTypes.string,
    title: PropTypes.string,
    contents: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.shape({
      _id: PropTypes.string,
      firstName: PropTypes.string,
    }),
    likes: PropTypes.arrayOf(PropTypes.string),
  }),
  page: PropTypes.number,
};
export default Post;
