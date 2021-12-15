import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import Hero from '../components/Hero/Hero';
import useStyles from '../styles/customerDetails';

function CustomerDetails() {
  const { id: _id } = useParams();
  console.log(_id);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero title="Title Customer" subtitle="Subtitle customer" bgImage="" blendColor="black" blendMode="luminosity" />
      <Container className={`${classes.page} ${classes.pageCustomerDetails}`} maxWidth="false">
        Customer Details width ID: {_id}
      </Container>
      ;
    </React.Fragment>
  );
}
export default CustomerDetails;
