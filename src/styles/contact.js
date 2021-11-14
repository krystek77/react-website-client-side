/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  /**
   * contact page
   */
  companyData: {
    marginTop: 48,
    padding: '48px 24px',
    backgroundColor: theme.palette.secondary.dark,
  },
  companyDataAdress: {
    backgroundColor: 'transparent',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
  },
  companyDataName: {
    color: theme.palette.secondary.contrastText,
    '& .MuiTypography-root': {
      color: theme.palette.secondary.contrastText,
      fontSize: 20,
      fontWeight: 500,
    },
    '& .MuiTypography-root:first-child': {
      fontWeight: 700,
      fontSize: 24,
    },
  },
  companyDataDescription: {},
  companyDataText: {
    color: theme.palette.secondary.contrastText,
    fontSize: 18,
    fontWeight: 300,
    lineHeight: 1.5,
    maxWidth: 900,
  },
  companyDataContact: {
    color: theme.palette.secondary.contrastText,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
  },
  companyDataIcon: {
    color: theme.palette.secondary.contrastText,
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main,
    },
  },
  companyDataDetails: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  pageContact: {
    paddingTop: 48,
    paddingBottom: 48,
  },
  companyContactTitle: {
    textAlign: 'center',
    fontWeight: 700,
    paddingBottom: 48,
    color: theme.palette.secondary.main,
  },
  companyContactHeader: {
    '& .MuiCardHeader-title': {
      color: theme.palette.primary.main,
      fontWeight: 500,
    },
    '& .MuiAvatar-root': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
  companyContactContent: {
    padding: 0,
  },
  companyContactImage: {},
  companyContactDescription: {
    padding: 16,
    fontSize: 14,
    lineHeight: 1.3,
  },
  companyContactTitleList: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16,
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  companyContactList: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 16,
  },
  companyContactListItem: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 14,
  },
  companyContactAction: {},
}));
