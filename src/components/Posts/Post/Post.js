/* eslint-disable no-unused-vars */
import React from 'react';
import { Avatar, Card, CardContent, Typography, IconButton, Button, CardActions,CardMedia,Divider, CardHeader} from '@mui/material';
import { MoreVert, Favorite, Delete } from '@mui/icons-material';
import useStyles from './styles';

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.post} sx={{margin:"0 16px 16px"}}>
      <div className={classes['post__topbar']}>
        <Typography className={classes['post__date']} variant="body1">Listopad 6,2021</Typography>
        <IconButton className={`${classes['post__btn']} ${classes['post__btn--edit']}`}><MoreVert/></IconButton>
      </div>
      <CardMedia component="img" image="../assets/images/news/template-news-small-300x209.webp" alt="some image" height="200" />
      <CardContent className={classes['post__content']}>
        <Typography className={classes['post__title']} variant="h6">Zdalnie zarządzane pralnie samoobsługowe</Typography>   
        <div className={classes['post__tags']}>
          <Typography className={classes['post__tag']} variant="caption">#alliance</Typography>
          <Typography className={classes['post__tag']} variant="caption">#rozwiązania</Typography>
          <Typography className={classes['post__tag']} variant="caption">#samoobsługa</Typography>
          <Typography className={classes['post__tag']} variant="caption">#sterownik</Typography>
        </div>
        <Typography className={classes['post__text']} variant="body2">
          Lorem ipsum dolor sit amet Nemo in, sed cupiditate iure sunt, tenetur optio quam velit doloremque 
          temporibus distinctio eaque asperiores, commodi itaque dolorem accusamus repudiandae voluptate...
        </Typography>
        <Typography className={classes['post__author']} variant="caption">autor: Krystian</Typography>
        <Divider light/>
      </CardContent>
      <CardActions disableSpacing>
        <Button className={`${classes['post__btn']} ${classes['post__btn--more']}`} variant="text">czytaj</Button>
        <Button className={`${classes['post__btn']} ${classes['post__btn--favorite']}`} startIcon={<Favorite/>}>0</Button>
        <IconButton color="secondary" className={`${classes['post__btn']} ${classes['post__btn--delete']}`} >
          <Delete/>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
