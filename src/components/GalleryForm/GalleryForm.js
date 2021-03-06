/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Box, TextField, Button } from '@mui/material';
import { addPhoto, updatePhoto } from '../../actions/gallery';
import FileBase64 from 'react-file-base64';
import { Send, Clear } from '@mui/icons-material';

import SectionTitle from '../SectionTitle/SectionTitle';
import moment from 'moment';
import 'moment/locale/pl';
moment.locale('pl');
import AdapterDate from '@mui/lab/AdapterMoment';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import useStyles from './styles';

function GalleryForm({ currentPhotoID, setCurrentPhotoID }) {
  const [photoData, setPhotoData] = useState({ title: '', image: '', equipment: '', doneAt: null });
  const photo = useSelector((state) => (currentPhotoID ? state.gallery.photos.find((photo) => photo._id === currentPhotoID) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const handlePhotoData = (e) => {
    e.preventDefault();
    if (photo) {
      dispatch(updatePhoto(photo._id, { ...photoData, doneAt: photoData.doneAt }));
    } else {
      dispatch(addPhoto({ ...photoData, doneAt: photoData.doneAt.toDate() }));
    }
    clearPhotoData();
  };
  const clearPhotoData = () => {
    setPhotoData({ title: '', image: '', equipment: '', doneAt: null });
    setCurrentPhotoID(null);
  };
  // console.log(moment(photoData.doneAt).fromNow());
  // console.log(photoData.doneAt?.toDate());
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
    if (photo) setPhotoData({ title: photo.title, image: photo.image, equipment: photo.equipment, doneAt: photo.doneAt });
    return () => {};
  }, [photo]);

  return (
    <Container className={classes.gallery} maxWidth="md">
      <SectionTitle title={photo ? 'Formularz edytowania zdj??cia zrealizowanej pralni' : `Formularz dodawania zdj??cia zrealizowanej pralni`} />
      <Box className={classes.galleryForm} component="form" autoComplete="off" noValidate onSubmit={handlePhotoData}>
        <TextField className={classes.galleryInput} fullWidth type="text" label="tytu??" name="title" variant="standard" placeholder="np. Bie??kowski Resort, Kielce" value={photoData.title} onChange={(e) => setPhotoData({ ...photoData, title: e.target.value })} />
        <TextField className={classes.galleryInput} fullWidth type="text" label="dostarczone wyposa??enie pralnicze" name="equipment" variant="standard" placeholder="np. Pralma-16F - szt.2, SE-16R - szt.3" value={photoData.equipment} onChange={(e) => setPhotoData({ ...photoData, equipment: e.target.value })} />
        <Box className={classes.galleryInputFile}>
          <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setPhotoData({ ...photoData, image: base64 })} />
        </Box>
        <LocalizationProvider dateAdapter={AdapterDate}>
          <DatePicker label="Data realizacji" value={photoData.doneAt} onChange={(newDate) => setPhotoData({ ...photoData, doneAt: newDate })} mask="__.__.____" renderInput={(params) => <TextField {...params} />} />
        </LocalizationProvider>
        <Button fullWidth className={`${classes.galleryButton} ${classes.galleryButtonSend}`} type="submit" variant="contained" size="medium" endIcon={<Send />}>
          wy??lij
        </Button>
        <Button fullWidth className={`${classes.galleryButton} ${classes.galleryButtonClear}`} type="button" variant="contained" size="medium" endIcon={<Clear />} onClick={clearPhotoData}>
          wyczy????
        </Button>
      </Box>
    </Container>
  );
}

GalleryForm.propTypes = {
  currentPhotoID: PropTypes.string,
  setCurrentPhotoID: PropTypes.func,
};

{
  /* <Box className={classes.gallerySlider}>
          <Typography className={classes.gallerySliderLabel} id="slider-cols">
            Szeroko???? zdj??cia
          </Typography>
          <Slider className={classes.gallerySliderInput} value={photoData.cols} onChange={(e) => setPhotoData({ ...photoData, cols: e.target.value })} aria-label="cols" aria-labelledby="slider-cols" getAriaValueText={(value) => `${value} kolumnay`} valueLabelDisplay="on" step={1} marks={marksColumns} min={1} max={3} />
        </Box>
        <Box className={classes.gallerySlider}>
          <Typography className={classes.gallerySliderLabel} id="slider-rows">
            Wysoko???? zdj??cia
          </Typography>
          <Slider className={classes.gallerySliderInput} value={photoData.rows} onChange={(e) => setPhotoData({ ...photoData, rows: e.target.value })} aria-label="rows" aria-labelledby="slider-rows" getAriaValueText={(value) => `${value} wiersze`} valueLabelDisplay="on" step={1} marks={marksRows} min={1} max={3} />
        </Box> */
}

export default GalleryForm;
