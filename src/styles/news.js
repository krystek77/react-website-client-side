/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  /**
   * news page
   */

  pageNews: {
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'column',
    },
  },
  pageNewsSection: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  pageNewsHeader: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: 48,
  },
  pageNewsTitle: {
    fontWeight: 700,
    fontSize: 24,
    padding: '48px 24px',
    textAlign: 'left',
    textTransform: 'uppercase',
    color: theme.palette.secondary.contrastText,
  },
  pageNewsTitleCenter: {
    textAlign: 'center',
  },
}));
