/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomNodal from '../CustomModal/CustomModal';
import GalleryForm from '../GalleryForm/GalleryForm';

import galleryData from '../../constants/gallery';
import useStyles from './styles';

function Gallery() {
  const [data, setData] = useState([]);
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const classes = useStyles();

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setCurrentPhoto(null);
  };
  const handleOpenModal = (currentPhoto) => {
    setIsOpenModal(true);
    setCurrentPhoto(currentPhoto);
  };
  const SIZE = 150;

  useEffect(() => {
    setData(galleryData);
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="false" component="section" className={classes.imageListSection}>
        <SectionTitle title="Wybrane realizacje pralni" />
        {currentPhoto && (
          <CustomNodal open={isOpenModal} handleClose={handleCloseModal} title={currentPhoto.title}>
            <Box className={classes.imageModalInner}>
              <img className={classes.imageModalImage} src={currentPhoto.image} alt={currentPhoto.title} />
            </Box>
            <Typography className={classes.imageModalCaption} variant="body2" component="p">
              wyposażenie:
              <Typography className={classes.imageModalCaptionValue} component="span" variant="body2">
                {currentPhoto.equipment}
              </Typography>
            </Typography>
          </CustomNodal>
        )}
        {/** dynamic photo gallery */}
        {galleryData.length !== 0 ? (
          <ImageList className={classes.imageList} rowHeight={150} gap={5} cols={6}>
            {galleryData.map((item) => (
              <ImageListItem key={item._id} className={classes.imageListItem} cols={item.cols} rows={item.rows} onClick={() => handleOpenModal(item)}>
                <img className={classes.imageListItemImage} src={`${item.image}?w=${SIZE * item.cols}&h=${SIZE * item.rows}&fit=crop&auto=format`} loading="lazy" alt="1" />
                <ImageListItemBar className={classes.imageListItemCaption} title={item.title} position="top" />
              </ImageListItem>
            ))}
          </ImageList>
        ) : null}
        {/** END dynamic photo gallery */}
        {/** form for adding photos to gallery */}
        <GalleryForm/>
        {/** END form for adding photos to gallery*/}
      </Container>
    </React.Fragment>
  );
}
export default Gallery;
