/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  customersListItem: {
    display: 'flex',
    marginBottom: 24,
    boxShadow: 'none',
    borderRadius: 0,
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: 24,
      borderBottom: `1px solid rgba(0,0,0,0.05)`,
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
    height: 380,
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
}));
