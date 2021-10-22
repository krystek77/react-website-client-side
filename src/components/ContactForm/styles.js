/* eslint-disable no-unused-vars */
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  contactFormWrapper: {
    backgroundColor: 'gold',
    paddingBottom: '40px',
    paddingTop: '40px',
  },
  contactForm: {},
  btnSubmit: {
    display: 'flex',
    marginLeft: 'auto',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  // inputField:{
  //   "& label.Mui-focused": {
  //     color: theme.palette.secondary.main,
  //   },
  //   "& .MuiInput-underline:after": {
  //     borderBottomColor: theme.palette.secondary.main,
  //   },
  //   "&:hover":{
  //     "& .MuiInputLabel-root":{
  //       color:theme.palette.primary.light,
  //     },
  //     "& .MuiInput-underline:after": {
  //       borderBottomColor: theme.palette.primary.light,
  //     }
  //   },
  // }
}));
