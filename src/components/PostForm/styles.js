import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  postFormSection: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  postFormSectionHeader: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: 48,
  },
  postFormSectionTitle: {
    fontWeight: 700,
    fontSize: 24,
    padding: '48px 24px',
    textAlign: 'left',
    textTransform: 'uppercase',
    color: theme.palette.secondary.contrastText,
  },
  postFormSectionTitleCenter: {
    textAlign: 'center',
  },

  postForm: {
    marginBottom: 48,
  },
  postFormInput: {
    marginBottom: 16,
  },
  postFormFile: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  postFormBtn: {
    display: 'flex',
  },
  postFormBtnSubmit: {
    marginBottom: 8,
    backgroundColor: theme.palette.primary.main,
  },
  postFormBtnClear: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
