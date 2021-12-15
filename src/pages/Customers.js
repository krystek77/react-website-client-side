import React from 'react';
import { Container } from '@mui/material';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Hero from '../components/Hero/Hero';
import CustomerCards from '../components/Customers/CustomerCards';

import useStyles from '../styles/customers';

function Customers() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero title="Sektory, którym oferujemy uslugi" subtitle="Różne potrzeby, różne pralnie..., jeden dostawca - Pralma" />
      <Container component="section" className={`${classes.page} ${classes.pageCustomers}`} maxWidth="false">
        <SectionTitle title="Nasi odbiorcy" />
        {/** customer cards */}
        <CustomerCards />
        {/** END customer cards */}
      </Container>
    </React.Fragment>
  );
}
export default Customers;
