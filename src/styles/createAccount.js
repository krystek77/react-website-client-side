/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  pageCreateAccount: {
    paddingTop: 48,
  },
  pageCreateAccountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    width: 48,
    height: 48,
    margin: '0 auto',
    marginBottom: 32,
  },
  pageCreateAccountTitle: {
    fontWeight: 500,
    marginBottom: 48,
    color: theme.palette.secondary.main,
  },
  pageCreateAccountForm: {
    marginBottom: 48,
  },
  pageCreateAccountFormControl: {},
  pageCreateAccountFormControlNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageCreateAccountFormControlSwitch: {
    '& .MuiSvgIcon-root': {
      transform: 'rotate(180deg)',
    },
  },
  pageCreateAccountFormControlActions: {
    marginTop: 48,
  },
  pageCreateAccountInput: {},
  pageCreateAccountLabel: {},
  pageCreateAccountIconInput: {
    color: theme.palette.secondary.main,
  },
  pageCreateAccountButton: {
    marginLeft: 'auto',
  },
  pageCreateAccountButtonSwitch: {
    color: theme.palette.secondary.main,
  },
  pageCreateAccountFormControlTitle: {
    fontSize: 14,
    fontWeight: 600,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  pageCreateAccountDivider: {
    marginTop: 16,
    marginBottom: 16,
  },
  pageCreateAccountRole: {},
}));
