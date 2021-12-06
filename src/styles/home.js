/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageHomeLatestPosts: {
    padding: '48px 24px',
    backgroundColor: theme.palette.secondary.light,
  },
  pageHomeLatestPostsTitle: {
    fontWeight: 700,
    fontSize: 32,
    width: '100%',
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
    color: theme.palette.secondary.contrastText,
  },
  pageHomeLatestPostsPost: {
    padding: 8,
  },
}));
