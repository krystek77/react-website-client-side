/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  post: {
    marginTop: 48,
    marginBottom: 48,
  },
  postData: {
    marginBottom: 24,
  },
  postTitle: {
    marginBottom: 24,
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
  postContents: {
    fontSize: 20,
    marginBottom: 24,
    fontWeight: 300,
  },
  postTag: {
    marginRight: 8,
    marginBottom: 24,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  postAuthor: {
    marginBottom: 24,
  },
  postAuthorName: {
    fontWeight: '600',
  },
  postDivider: {
    marginBottom: 24,
  },
  postReturnButton: {
    display: 'flex',
    maxWidth: 'max-content',
    marginLeft: 'auto',
  },
  //featured post
  pagePostDetailsFeaturedPosts: {
    padding: '48px 24px',
    backgroundColor: '#f1f9ff',
  },
  pagePostDetailsFeaturedPostsTitle: {
    fontWeight: 700,
    fontSize: 32,
    width: '100%',
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
    color: theme.palette.secondary.main,
  },
  pagePostDetailsFeaturedPostsPost: {
    padding: 8,
  },
}));
