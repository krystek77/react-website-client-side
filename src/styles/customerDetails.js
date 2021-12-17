/* eslint-disable no-unused-vars */
import { makeStyles } from '@mui/styles';
export default makeStyles((theme) => ({
  pageCustomerDetails: {
    paddingTop: 48,
  },
  //other segments
  otherSegments: {
    display: 'grid',
    // border: '1px solid black',
    gap: 16,
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2,1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3,1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(5,1fr)',
    },
  },
  otherSegmentsItem: {
    width: '100%',
    justifySelf: 'center',
    height: 260,
    position: 'relative',
    cursor: 'pointer',
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.65)',
  },
  otherSegmentsImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  otherSegmentsTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '8px 24px',
    backgroundImage: 'linear-gradient(to top,rgba(0,0,0,1) 0%,rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.45) 100%)',
    color: theme.palette.primary.contrastText,
  },
  //markdown
  markdown: {
    border: '1px solid red',
  },
}));
