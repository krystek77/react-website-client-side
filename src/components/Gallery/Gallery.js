/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Box, ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle/SectionTitle';
import CustomNodal from '../CustomModal/CustomModal';
import GalleryForm from '../GalleryForm/GalleryForm';
import Loading from '../Loading/Loading';
import Feedback from '../Feedback/Feedback';

import { getPhotos } from '../../actions/gallery';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';

function Gallery() {
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isLoading, photos } = useSelector((state) => state.gallery);
  const dispatch = useDispatch();

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
    dispatch(getPhotos());
    return () => {};
  }, [dispatch]);

  if(isLoading) return <Loading message="Ładowanie zdjęć" mt={48}/>
  if(!photos.length && !isLoading) return <Feedback message="--- Brak zdjęć ---"/>

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
        {photos.length !== 0 ? (
          <ImageList className={classes.imageList} rowHeight={150} gap={5} cols={6}>
            {photos.map((item) => (
              <ImageListItem key={item._id} className={classes.imageListItem} cols={item.cols} rows={item.rows} onClick={() => handleOpenModal(item)}>
                <img className={classes.imageListItemImage} src={`${item.image}?w=${SIZE * item.cols}&h=${SIZE * item.rows}&fit=crop&auto=format`} loading="lazy" alt="1" />
                <ImageListItemBar className={classes.imageListItemCaption} title={item.title} position="top" />
              </ImageListItem>
            ))}
          </ImageList>
        ) : null}
        {/** END dynamic photo gallery */}
        {/** form for adding photos to gallery */}
        <GalleryForm />
        {/** END form for adding photos to gallery*/}
      </Container>
    </React.Fragment>
  );
}
export default Gallery;
