import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  posts: {
    marginBottom: 48,
  },
  ['post-wrapper']: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 16,
  },
  //Spinner
  loading: {
    border: `2px solid ${theme.palette.secondary.light}`,
    borderRadius:6,
    width: 360,
    margin: '0 auto',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },
  loadingText: {
    marginBottom: 24,
    color:theme.palette.secondary.dark
  },
  loadingImage: {
      color:theme.palette.secondary.dark
  },
  //Feedback
  feedBack:{
    marginBottom: 48,
    color:theme.palette.secondary.dark,
    textAlign:"center"
  }
}));
