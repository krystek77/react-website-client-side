/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  customModal: {},
  customModalInner: {
    background: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50% )',
    // minHeight: 480,
    borderRadius: 4,
    padding: 8,
    paddingBottom: 40,
    '& .css-1lovwq1-MuiButtonBase-root-MuiButton-root:hover': {
      backgroundColor: '#2E2E2E',
    },
  },
  customModalCloseIconButton: {
    display: 'block',
    marginLeft: 'auto',
  },
  customModalCloseIcon: {
    color: '#1E1E1E',
  },
  customModalTitle: {
    textAlign: 'center',
    fontWeight: 600,
    textTransform: 'uppercase',
    marginBottom: 8,
    color: '#1E1E1E',
  },
  customModalContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px dotted black',
    maxWidth: 900,
    margin: '0 auto',
    marginBottom: 24,
  },
  customModalCloseButton: {
    display: 'flex',
    margin: '0 auto',
    backgroundColor: '#1E1E1E',
  },
}));
