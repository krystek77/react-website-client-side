/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, CardContent, Typography, IconButton, Button, CardActions, CardMedia, Divider } from '@mui/material';
import { MoreVert, Favorite, Delete } from '@mui/icons-material';
import useStyles from './styles';

import moment from 'moment';
import 'moment/locale/pl';
moment.locale("pl")


function Post({ post,setCurrentPostID }) {
  const classes = useStyles();
  const { _id,createdAt, selectedImage, title, contents, creator, tags } = post;

  return (
    <Card className={classes.post} sx={{ margin: '0 16px 16px' }}>
      <div className={classes['post__topbar']}>
        <Typography className={classes['post__date']} variant="body1"> {moment(createdAt).fromNow()} </Typography>
        <IconButton className={`${classes['post__btn']} ${classes['post__btn--edit']}`} onClick={()=>setCurrentPostID(_id)}> <MoreVert /> </IconButton>
      </div>
      <CardMedia component="img" image={selectedImage} alt="some image" height="200" />
      <CardContent className={classes['post__content']}>
        <Typography className={classes['post__title']} variant="h6"> {title} </Typography>

        {tags.length !== 0 && (
          <div className={classes['post__tags']}>
            {tags.map((tag) => {
              return (
                <Typography key={tag} className={classes['post__tag']} variant="caption">
                  {`#${tag}`}
                </Typography>
              )
            }
            )}
          </div>
        )}

        <Typography className={classes['post__text']} variant="body2"> {contents.substring(0,150).concat(" ...")} </Typography>
        <Typography className={classes['post__author']} variant="caption"> autor: <b>{creator}</b></Typography>
      </CardContent>
      <Divider light />
      <CardActions disableSpacing>
        <Button className={`${classes['post__btn']} ${classes['post__btn--more']}`} variant="text"> czytaj </Button>
        <Button className={`${classes['post__btn']} ${classes['post__btn--favorite']}`} startIcon={<Favorite />}> 0 </Button>
        <IconButton color="secondary" className={`${classes['post__btn']} ${classes['post__btn--delete']}`}> <Delete /> </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
