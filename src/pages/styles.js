/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  page: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'initial',
    alignItems: 'initial',
  },

  /**
   * auth page
   */

  pageAuth: {
    paddingTop: 48,
  },
  pageAuthAvatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    width: 48,
    height: 48,
    margin: '0 auto',
    marginBottom: 32,
  },
  pageAuthTitle: {
    fontWeight: 500,
    marginBottom: 48,
    color: theme.palette.secondary.main,
  },
  pageAuthForm: {
    marginBottom: 48,
  },
  pageAuthFormControl: {},
  pageAuthFormControlNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageAuthFormControlSwitch: {
    '& .MuiSvgIcon-root': {
      transform: 'rotate(180deg)',
    },
  },
  pageAuthFormControlActions: {
    marginTop: 48,
  },
  pageAuthInput: {},
  pageAuthLabel: {},
  pageAuthIconInput: {
    color: theme.palette.secondary.main,
  },
  pageAuthButton: {
    marginLeft: 'auto',
  },
  pageAuthButtonSwitch: {
    color: theme.palette.secondary.main,
  },

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
