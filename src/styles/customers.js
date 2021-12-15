/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageCustomers: {
    paddingTop: 48,
    // backgroundImage:'linear-gradient(to bottom,rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.35) 100%)'
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
    '&:nth-child(2n)': {
      flexDirection: 'row-reverse',
    },
  },
  customerListItemContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width:"100%",
    padding:24,
  },
  customerListItemTitle: {},
  customerListItemSubtitle: {},
  customerListItemActionButton: {},
  customListItemImageWrapper:{
      width:"100%",
      padding:8,
  },
  customersListItemImage: {
    display: 'block',
    width:"100%",
    height:"100%",
    objectFit:"cover",
  },
}));
