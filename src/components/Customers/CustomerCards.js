/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import CustomerCard from './CustomerCard/CustomerCard';
import useStyles from './styles';

//import temporary data
import data from '../../constants/customers';

function CustomerCards() {
  const [customers, setCustomers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setCustomers(data);
    return () => {};
  }, []);

  return customers.length !== 0 ? (
    <Container className={classes.customersList}>
      {customers.map((customer) => {
        return <CustomerCard key={customer._id} customer={customer} />;
      })}
    </Container>
  ) : null;
}
export default CustomerCards;
