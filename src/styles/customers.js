/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageCustomers: {
    paddingTop: 48,
  },

  //customer card
  customersList: {
    paddingBottom: 24,
  },
  customersListItem: {
    display: 'flex',
    marginBottom: 24,
    boxShadow: 'none',
    borderRadius: 0,
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      '&:nth-child(even)': {
        flexDirection: 'row-reverse',
      },
    },
  },
  customersListItemContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 8,

    [theme.breakpoints.up('sm')]: {
      padding: 24,
      marginBottom: 0,
    },
  },
  customersListItemTitle: {
    marginBottom: 24,
    color: theme.palette.secondary.main,
  },
  customersListItemSubtitle: {
    marginBottom: 24,
    color: theme.palette.secondary.main,
  },
  customersListItemActionButton: {
    width: 'max-content',
    margin: '0 auto',
  },
  customersListItemImageWrapper: {
    width: '100%',
    padding: 1,
    border: `10px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('sm')]: {
      margin: 24,
    },
  },
  customersListItemImage: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '50% 50%',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#1E1E1E',
    background: 'linear-gradient(left right,rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0) 100%)',
  },
}));
