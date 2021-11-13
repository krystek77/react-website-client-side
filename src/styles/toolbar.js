/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';
import { palette } from '@mui/system';

export default makeStyles((theme) => ({
  toolbar: {
    position:"relative",
    top:0,
    left:0,
    width:"100%",
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
    backgroundColor:theme.palette.primary.main,
    paddingTop:8,
    paddingBottom:8
  },
  toolbarUserPanel:{
    display:"flex",
    alignItems:"center"
  },
  toolbarUserAvatar:{
    backgroundColor:theme.palette.secondary.main,
    color:theme.palette.secondary.contrastText,
    marginRight:8
  },
  toolbarUserName:{
    marginRight:24,
    color:theme.palette.secondary.contrastText,
    fontSize:12,
    fontWeight:700
  },
  toolbarButton:{
    color:theme.palette.primary.contrastText,
    borderColor:theme.palette.primary.light,
    borderStyle:"solid",
    borderWidth:"1px"
  },
  toolbarButtonLogout:{
    marginRight:8,
  },
  toolbarButtonLogin:{
    marginRight:8,
  },
  toolbarButtonContact:{
    borderRadius:"4px",
    padding:6
  }
}));
