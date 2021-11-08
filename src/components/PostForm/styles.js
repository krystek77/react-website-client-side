import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  ['post-form']: {
    marginBottom: 48,
  },
  ['post-form__input']: {
    marginBottom: 16,
  },
  ['post-form__file']: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  ['post-form__btn']: {
    display: 'flex',
  },
  ['post-form__btn--submit']: {
    marginBottom: 8,
    backgroundColor: theme.palette.primary.main,
  },
  ['post-form__btn--clear']: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
