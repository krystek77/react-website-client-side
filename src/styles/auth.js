/* eslint-disable no-unused-vars */
import {makeStyles} from '@mui/styles';

export default makeStyles((theme)=>({
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
}))