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
    paddingTop:12,
    paddingBottom:12
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
  toolbarUserData:{
    marginRight:12,
    paddingRight:12,
    borderRight:`1px solid ${theme.palette.primary.light}`,
    lineHeight:1
  },
  toolbarUserName:{
    color:theme.palette.secondary.contrastText,
    fontSize:14,
    fontWeight:700
  },
  toolbarUserRoles:{
    fontSize:11,
    display:"inline-block",
    backgroundColor:theme.palette.primary.light,
    color:theme.palette.primary.contrastText,
    padding:"2px 8px",
    borderRadius:10
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
  },
  toolbarAdminPanel:{
    paddingRight:24
  },
  toolbarAdminPanelAddUser:{
    borderRadius:4
  },
}));
