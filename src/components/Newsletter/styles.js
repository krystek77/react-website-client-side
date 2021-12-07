/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  newsletter: {
    padding: '48px 24px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  newsletterInner: {
    margin: '0 auto',
  },
  newsletterInformation: {
    marginBottom: 48,
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  newsletterInformationTitle: {
    color: theme.palette.primary.contrastText,
    fontWeight: 900,
    textTransform: 'uppercase',
    fontSize: 32,
    lineHeight: 1.1,
    marginBottom: 24,
    [theme.breakpoints.up('md')]: {
      fontSize: 48,
    },
  },
  newsletterInformationSubtitle: {
    lineHeight: 1,
    fontSize: 12,
    [theme.breakpoints.up('md')]: {
      fontSize: 16,
    },
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '& label': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiInput-root': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiInputAdornment-root': {
      color: theme.palette.primary.contrastText,
    },
  },
  newsletterFormInput: {
    marginBottom: 24,
    backgroundColor: theme.palette.primary.main,
  },
  newsletterFormButton: {
    color: theme.palette.primary.contrastText,
    display: 'flex',
    marginLeft: 'auto',
  },
}));
