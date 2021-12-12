/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageListSection: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 48,
    paddingBottom: 48,
  },
  imageList: {
    marginBottom: 0,
    overflow: 'hidden',
    transform:"translateZ(0)"
  },
  imageListItem: {
    // border: '1px solid green',
    cursor: 'pointer',
    '& $imageListItemImage': {
      width: 'auto',
    },
  },
  imageListItemImage: {},
  imageListItemCaption: {
    background: 'linear-gradient(to bottom,rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  //image modal
  imageModalInner: {
    height: 560,
    overflow: 'hidden',
    marginBottom: 8,
  },
  imageModalImage: {
    display: 'block',
    width: 900,
    maxWidth: '100%',
    height: '100%',
    borderRadius: 4,
    border: `10px solid ${theme.palette.secondary.main}`,
    objectFit: 'cover',
    objectPosition: '50% 50%',
  },
  imageModalCaption: {
    fontSize: 12,
    color: '#1E1E1E',
  },
  imageModalCaptionValue: {
    fontSize: 14,
    fontWeight: 600,
    paddingLeft: 8,
  },
  imageListItemActionButton: {
    color: theme.palette.secondary.contrastText,
  },
}));
