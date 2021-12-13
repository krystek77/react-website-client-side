/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  //imageList
  imageList: {
    width: '100%',
    border: '1px solid red',
    display: 'grid',
    gridTemplateColumns: 'repeat(6,1fr)',
    gridTemplateRows: 'repeat(4, 150px)',
    gap: 5,
  },
  imageListItem: {
    border: '1px solid black',
    position: 'relative',
    padding: 0,
    cursor: 'pointer',
  },
  imageListImage: {
    objectFit: 'cover',
    display: 'block',
    width: '100%',
    height: '100%',
  },
  imageListBar: {
    paddingLeft: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    background: 'linear-gradient(to bottom,rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageListTitle: {
    color: theme.palette.secondary.contrastText,
  },
  imageListActionButton: {
    color: theme.palette.secondary.contrastText,
  },
  imageListActionButtonEdit: {},
  position0: {
    gridColumn: '1/2',
    gridRow: '1/2',
  },
  position1: {
    gridColumn: '2/4',
    gridRow: '1/3',
  },
  position2: {
    gridColumn: '4/6',
    gridRow: '1/2',
  },
  position3: {
    gridColumn: '6/7',
    gridRow: '1/2',
  },
  position4: {
    gridColumn: '1/2',
    gridRow: '2/4',
  },
  position5: {
    gridColumn: '2/4',
    gridRow: '3/4',
  },
  position6: {
    gridColumn: '4/5',
    gridRow: '2/4',
  },
  position7: {
    gridColumn: '5/7',
    gridRow: '2/4',
  },
  position8: {
    gridColumn: '1/2',
    gridRow: '4/5',
  },
  position9: {
    gridColumn: '2/4',
    gridRow: '4/5',
  },
  position10: {
    gridColumn: '4/6',
    gridRow: '4/5',
  },
  position11: {
    gridColumn: '6/7',
    gridRow: '4/5',
  },

  imageListSection: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 48,
    paddingBottom: 48,
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
