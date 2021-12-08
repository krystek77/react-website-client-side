/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageListSection: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 48,
    paddingBottom: 48,
  },
  imageListSectionTitle: {
    fontSize: 32,
    fontWeight: 800,
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
    color: '#1E1E1E',
  },
  imageList: {
    marginBottom: 0,
    overflow: 'hidden',
  },
  imageListItem: {
    // border: '1px solid green',
    '& $imageListItemImage': {
      width: 'auto',
    },
  },
  imageListItemImage: {},
  imageListItemCaption: {
    background: 'linear-gradient(to bottom,rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));
