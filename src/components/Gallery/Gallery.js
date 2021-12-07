/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, ImageList, ImageListItem } from '@mui/material';
import useStyles from './styles';

function Gallery() {
  const classes = useStyles();
  return (
    <Container maxWidth="false" component="section" className={classes.imageListWrapper}>
      <ImageList className={classes.imageList} rowHeight={200} gap={5}>
        <ImageListItem className={classes.imageListItem}>
          <img src="1.webp" alt="1" />
        </ImageListItem>
        <ImageListItem className={classes.imageListItem}>
          <img src="2.webp" alt="2" />
        </ImageListItem>
        <ImageListItem className={classes.imageListItem}>
          <img src="3.webp" alt="3" />
        </ImageListItem>
        <ImageListItem className={classes.imageListItem}>
          <img src="4.webp" alt="4" />
        </ImageListItem>
        <ImageListItem className={classes.imageListItem}>
          <img src="5.webp" alt="5" />
        </ImageListItem>
      </ImageList>
    </Container>
  );
}
export default Gallery;
