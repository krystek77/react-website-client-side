/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  /**
   * news page
   */

  pageNews: {
    paddingTop: 48,
    paddingLeft: 0,
    paddingRight: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  pageNewsSection: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  pageNewsPosts: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 24,

    [theme.breakpoints.up('lg')]: {
      flexWrap: 'nowrap',
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  pageNewsFilter: {
    minWidth: 360,
    paddingLeft: 8,
    paddingRight: 8,
    flexGrow: 1,
    [theme.breakpoints.up('lg')]: {
      flexGrow: 0,
    },
  },
  pageNewsSearch: {
    marginBottom: 24,
  },
  // Tags section of page news
  pageNewsTags: {
    marginBottom: 24,
  },
  pageNewsTagsLabel: {},
  pageNewsTagsInput: {},
  pageNewsTagsIcon: {},
  pageNewsTag: {},
  // Pagination section of page news
  pageNewsPagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
}));
