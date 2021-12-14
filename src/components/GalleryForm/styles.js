/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  gallery: {
    marginTop: 48,
    '& .MuiOutlinedInput-root': {
      marginBottom: 16,
    },
  },
  galleryForm: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  galleryInput: {
    marginBottom: 16,
  },
  galleryInputFile: {
    marginBottom: 16,
    marginTop: 8,
  },
  galleryInputDate: {
    marginBottom: 8,
    border: '1px solid red',
  },
  gallerySlider: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 16,
    [theme.breakpoints.up('md')]: {
      flexWrap: 'nowrap',
    },
    alignItems: 'center',
  },
  gallerySliderLabel: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallerySliderInput: {
    width: '100%',
    padding: '24px 0px',
  },
  galleryButton: {},
  galleryButtonSend: {
    marginBottom: 8,
  },
  galleryButtonClear: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
