/* eslint-disable no-unused-vars */
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  contactFormWrapper: {
    backgroundColor: '#f7f7f7',
    paddingBottom: 80,
    paddingTop: 64,
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
  title:{
    fontWeight: 700,
    textAlign: "center",
    paddingBottom:48,
    textTransform:'uppercase'
  }
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
