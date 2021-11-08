/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';
import { textAlign } from '@mui/system';
export default makeStyles((theme) => ({
  page: {
  },
  ['page__section']:{
    paddingLeft:0,
    paddingRight:0,

  },
  ['page__header']:{
    width:"100%",
    backgroundColor:theme.palette.secondary.main,
    marginBottom:48
  },
  ['page__title']:{
    fontWeight:700,
    fontSize:24,
    padding:"48px 24px",
    textAlign:"left",
    textTransform:"uppercase",
    color:theme.palette.secondary.contrastText
  },
  ['page__title--center']:{
    textAlign:"center"
  }
}));
