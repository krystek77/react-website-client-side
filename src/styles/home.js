/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageHome: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  pageHomeMain: {
    padding: 48,
  },
  pageHomeLatestPosts: {
    padding: '48px 24px',
    backgroundColor: '#f1f9ff',
  },
  pageHomeLatestPostsTitle: {
    fontWeight: 700,
    fontSize: 32,
    width: '100%',
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
    color: theme.palette.secondary.main,
  },
  pageHomeLatestPostsPost: {
    padding: 8,
  },
}));
