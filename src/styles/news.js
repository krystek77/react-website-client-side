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
  pageNewsPosts: {
    // border: '1px solid red',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 48,

    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap',
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  pageNewsFilter: {
    // border: '1px solid blue',
    minWidth: 360,
    padding: 8,
    flexGrow:1,
    [theme.breakpoints.up('lg')]: {
      flexGrow:0,
    },
  },
  pageNewsSearch: {
    marginBottom: 24,
  },
  pageNewsTags: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap:"wrap",
    border:`1px solid rgba(0,0,0,0.23)`,
    borderRadius:4
  },
  pageNewsTag: {
    margin:4,
    flexShrink:0,
  },
}));
