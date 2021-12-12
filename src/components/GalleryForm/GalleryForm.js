/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Box, Typography, TextField, Slider, Button } from '@mui/material';
import { addPhoto, updatePhoto } from '../../actions/gallery';
import FileBase64 from 'react-file-base64';
import { Send, Clear } from '@mui/icons-material';

import SectionTitle from '../SectionTitle/SectionTitle';
import useStyles from './styles';

function GalleryForm({ currentPhotoID, setCurrentPhotoID }) {
  const [photoData, setPhotoData] = useState({ title: '', image: '', cols: 1, rows: 1 });
  const photo = useSelector((state) => (currentPhotoID ? state.gallery.photos.find((photo) => photo._id === currentPhotoID) : null));
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();
  console.log(currentPhotoID);
  console.log(photo);

  const handlePhotoData = (e) => {
    e.preventDefault();
    if (photo) {
      console.log('Dispatch update');
    } else {
      console.log('Dispatch add photo');
      dispatch(addPhoto(photoData,history));

    }
    clearPhotoData();
  };
  const clearPhotoData = () => {
    setPhotoData({ title: '', image: '', cols: 1, rows: 1 });
    setCurrentPhotoID(null);
  };

  const marksColumns = [
    { value: 1, label: '1 kolumna' },
    { value: 2, label: '2 kolumny' },
    { value: 3, label: '3 kolumny' },
  ];
  const marksRows = [
    { value: 1, label: '1 wiersz' },
    { value: 2, label: '2 wiersze' },
    { value: 3, label: '3 wiersze' },
  ];
  useEffect(() => {
    if (photo) setPhotoData({ title: photo.title, image: photo.image, cols: photo.cols, rows: photo.rows });
    return () => {};
  }, [photo]);

  return (
    <Container className={classes.gallery} maxWidth="md">
      <SectionTitle title={photo ? 'Formularz edytowania zdjęcia zrealizowanej pralni' : `Formularz dodawania zdjęcia zrealizowanej pralni`} />
      <Box className={classes.galleryForm} component="form" autoComplete="off" noValidate onSubmit={handlePhotoData}>
        <TextField className={classes.galleryInput} fullWidth type="text" label="tytuł" name="title" variant="standard" placeholder="np. Bieńkowski Resort, Kielce" value={photoData.title} onChange={(e) => setPhotoData({ ...photoData, title: e.target.value })} />
        <Box className={classes.galleryInputFile}>
          <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPhotoData({ ...photoData, image: base64 })} />
        </Box>
        <Box className={classes.gallerySlider}>
          <Typography className={classes.gallerySliderLabel} id="slider-cols">
            Szerokość zdjęcia
          </Typography>
          <Slider className={classes.gallerySliderInput} value={photoData.cols} onChange={(e) => setPhotoData({ ...photoData, cols: e.target.value })} aria-label="cols" aria-labelledby="slider-cols" getAriaValueText={(value) => `${value} kolumnay`} valueLabelDisplay="on" step={1} marks={marksColumns} min={1} max={3} />
        </Box>
        <Box className={classes.gallerySlider}>
          <Typography className={classes.gallerySliderLabel} id="slider-rows">
            Wysokość zdjęcia
          </Typography>
          <Slider className={classes.gallerySliderInput} value={photoData.rows} onChange={(e) => setPhotoData({ ...photoData, rows: e.target.value })} aria-label="rows" aria-labelledby="slider-rows" getAriaValueText={(value) => `${value} wiersze`} valueLabelDisplay="on" step={1} marks={marksRows} min={1} max={3} />
        </Box>
        <Button fullWidth className={`${classes.galleryButton} ${classes.galleryButtonSend}`} type="submit" variant="contained" size="medium" endIcon={<Send />}>
          wyślij
        </Button>
        <Button fullWidth className={`${classes.galleryButton} ${classes.galleryButtonClear}`} type="button" variant="contained" size="medium" endIcon={<Clear />} onClick={clearPhotoData}>
          wyczyść
        </Button>
      </Box>
    </Container>
  );
}

GalleryForm.propTypes = {
  currentPhotoID: PropTypes.string,
  setCurrentPhotoID: PropTypes.func,
};

export default GalleryForm;
