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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '24px 24px',
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
    lineHeight: 1.3,
    fontSize: 16,
    [theme.breakpoints.up('md')]: {
      fontSize: 18,
    },
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // border: `1px dotted ${theme.palette.primary.dark}`,
    padding: '24px 24px',
    borderRadius:8,
    '& label': {
      color: theme.palette.primary.contrastText,
    },
    '& .MuiInput-root': {
      color: theme.palette.primary.contrastText,
      fontSize: 24,
      paddingTop: 8,
      paddingBottom: 8,
    },
    '& .MuiInputAdornment-root': {
      color: theme.palette.primary.contrastText,
    },
    '& .css-13sj06y-MuiInputBase-root-MuiInput-root:before': {
      borderBottom: '1px solid rgba(255,255,255,0.65)',
    },
    '& .MuiInputLabel-root': {
      fontWeight: 600,
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.primary.contrastText,
      fontSize: 24,
    },
    '& .css-13sj06y-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before': {
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
    },
  },
  newsletterFormTitle: {
    fontWeight: 900,
    color: theme.palette.primary.contrastText,
    marginBottom: 24,
    textAlign:'center'
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
