/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
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
  const [currentPhotoID, setCurrentPhotoID] = useState(null);
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

  const handleEditPhoto = (e, currentPhotoID) => {
    e.stopPropagation();
    setCurrentPhotoID(currentPhotoID);
  };

  const SIZE = 150;

  useEffect(() => {
    dispatch(getPhotos());
    return () => {};
  }, [dispatch]);

  if (isLoading) return <Loading message="Ładowanie zdjęć" mt={48} />;
  if (!photos.length && !isLoading) return <Feedback message="--- Brak zdjęć ---" />;

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
          <div className={classes.imageList}>
            {photos.map((item, index) => (
              <div key={item._id} className={`${classes.imageListInner} ${classes[`position${index}`]}`}>
                <button type="button" className={`${classes.imageListItem}`} onClick={() => handleOpenModal(item)}>
                  <img className={classes.imageListImage} src={item.image} alt={item.title} />
                </button>
                <div className={classes.imageListBar}>
                  <Typography className={classes.imageListTitle} variant="caption">
                    {item.title}
                  </Typography>
                  <IconButton className={`${classes.imageListActionButton} ${classes.imageListActionButtonEdit}`} onClick={(e) => handleEditPhoto(e, item._id)}>
                    <MoreVert />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {/** END dynamic photo gallery */}
        {/** form for adding photos to gallery */}
        <GalleryForm currentPhotoID={currentPhotoID} setCurrentPhotoID={setCurrentPhotoID} />
        {/** END form for adding photos to gallery*/}
      </Container>
    </React.Fragment>
  );
}
export default Gallery;
