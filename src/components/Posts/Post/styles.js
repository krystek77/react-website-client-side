/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  post: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
  },
  ['post__topbar']: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 2px 4px 16px',
    backgroundColor: theme.palette.secondary.main,
  },
  ['post__date']: {
    color: theme.palette.secondary.contrastText,
    fontSize: 12,
  },
  ['post__btn--edit']: {
    color: theme.palette.secondary.contrastText,
  },
  ['post__content']: {
    paddingBottom: 0,
    flexGrow: 1,
  },
  ['post__title']: {
    color: theme.palette.secondary.dark,
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: 8,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  ['post__tags']: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  ['post__tag']: {
    display: 'block',
    padding: 4,
    borderRadius: 15,
    marginTop: 4,
    marginRight: 4,
    fontSize: 9,
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText,
  },
  ['post__text']: {
    textSize: 16,
    fontWeight: 300,
    marginBottom: 16,
  },
  ['post__author']: {
    display: 'block',
    marginBottom: 8,
  },
  ['post__btn--more']: {
    fontWeight: 600,
  },
  ['post__btn--favorite']: {
    marginLeft: 'auto',
    paddingRight: 0,
  },
  ['post__btn--delete']: {
    color: theme.palette.secondary.main,
    paddingLeft: 0,
  },
}));
