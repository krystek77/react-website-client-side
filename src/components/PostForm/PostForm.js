/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import FileBase64 from 'react-file-base64';
import { Box, TextField, Button, Container, Typography } from '@mui/material';
import useStyles from './styles';

function PostForm({ currentPostID, setCurrentPostID }) {
  const [postData, setPostData] = useState({ title: '', contents: '', tags: '', selectedImage: '' });
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) => (currentPostID ? state.posts.find((post) => post._id === currentPostID) : null));

  const user = JSON.parse(localStorage.getItem('userProfile'));

  const handlePostData = (e) => {
    e.preventDefault();
    const formatedData = { ...postData, tags: postData.tags.split(','), author: user.user._id };
    
    if (currentPostID) {
      dispatch(updatePost(currentPostID, formatedData));
    } else {
      dispatch(createPost(formatedData));
    }
    
    clear();
  };

  const clear = () => {
    setPostData({ title: '', contents: '', tags: '', selectedImage: '' });
    setCurrentPostID(null);
  };

  useEffect(() => {
    if (post) {
      setPostData({ ...post, tags: post.tags.join(',') });
    }
  }, [post]);

  return (
    user && (
      <Container className={classes.postFormSection} component="section" maxWidth="false">
        <Container className={classes.postFormSectionHeader} component="header" maxWidth="false">
          <Typography className={`${classes.postFormSectionTitle} ${classes.postFormSectionTitleCenter}`} variant="h2" component="h2">
            {currentPostID ? 'Formularz edytowania wiadomości' : 'Formularz dodawania wiadomości'}
          </Typography>
        </Container>

        <Container maxWidth="md">
          <Box className={classes.postForm} component="form" autoComplete="off" noValidate onSubmit={handlePostData}>
            <TextField
              className={classes.postFormInput}
              fullWidth
              label="Tytuł"
              type="text"
              name="title"
              variant="standard"
              value={postData.title}
              onChange={(e) => {
                setPostData({ ...postData, title: e.target.value });
              }}
            />
            <TextField
              className={classes.postFormInput}
              fullWidth
              label="Treść"
              type="text"
              name="contents"
              multiline
              minRows="10"
              variant="standard"
              value={postData.contents}
              onChange={(e) => {
                setPostData({ ...postData, contents: e.target.value });
              }}
            />
            <TextField
              className={classes.postFormInput}
              fullWidth
              label="Tagi"
              type="text"
              name="tags"
              variant="standard"
              value={postData.tags}
              onChange={(e) => {
                setPostData({ ...postData, tags: e.target.value });
              }}
            />
            <div className={classes.postFormFile}>
              <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedImage: base64 })} />
            </div>
            <Button className={`${classes.postFormBtn} ${classes.postFormBtnSubmit}`} fullWidth type="submit" variant="contained" size="large">
              {currentPostID ? 'edytuj' : 'utwórz'}
            </Button>
            <Button className={`${classes.postFormBtn} ${classes.postFormBtnClear}`} fullWidth type="button" onClick={clear} variant="contained" size="medium">
              wyczyść
            </Button>
          </Box>
        </Container>
      </Container>
    )
  );
}

export default PostForm;
