/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Slider, Button } from '@mui/material';
import FileBase64 from 'react-file-base64';
import { Send, Clear } from '@mui/icons-material';

import SectionTitle from '../SectionTitle/SectionTitle';
import useStyles from './styles';

function GalleryForm() {
  const [photoData, setPhotoData] = useState({ title: '', selectedImage: '', width: 1, height: 1 });
  const classes = useStyles();

  const handlePhotoData = (e) => {
    e.preventDefault();
    console.log('Add phtoto to gallery');
    clearPhotoData();
  };
  const clearPhotoData = () => setPhotoData({ title: '', selectedImage: '', width: 1, height: 1 });

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

  return (
    <Container className={classes.gallery} maxWidth="md">
      <SectionTitle title="Formularz dodawania zdjęcia zrealizowanej pralni" />
      <Box className={classes.galleryForm} component="form" autoComplete="off" noValidate onSubmit={handlePhotoData}>
        <TextField className={classes.galleryInput} fullWidth type="text" label="tytuł" name="title" variant="standard" placeholder="np. Bieńkowski Resort, Kielce" value={photoData.title} onChange={(e) => setPhotoData({ ...photoData, title: e.target.value })} />
        <Box className={classes.galleryInputFile}>
          <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPhotoData({ ...photoData, selectedImage: base64 })} />
        </Box>
        <Box className={classes.gallerySlider}>
          <Typography className={classes.gallerySliderLabel} id="slider-width">
            Szerokość zdjęcia
          </Typography>
          <Slider className={classes.gallerySliderInput} value={photoData.width} onChange={(e) => setPhotoData({ ...photoData, width: e.target.value })} aria-label="width" aria-labelledby="slider-width" getAriaValueText={(value) => `${value} kolumnay`} valueLabelDisplay="on" step={1} marks={marksColumns} min={1} max={3} />
        </Box>
        <Box className={classes.gallerySlider}>
          <Typography className={classes.gallerySliderLabel} id="slider-height">
            Wysokość zdjęcia
          </Typography>
          <Slider className={classes.gallerySliderInput} value={photoData.height} onChange={(e) => setPhotoData({ ...photoData, height: e.target.value })} aria-label="height" aria-labelledby="slider-height" getAriaValueText={(value) => `${value} wiersze`} valueLabelDisplay="on" step={1} marks={marksRows} min={1} max={3} />
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
export default GalleryForm;
