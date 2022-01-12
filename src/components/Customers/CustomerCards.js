/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCustomers } from '../../actions/customers';
import ActionTypes from '../../constants/actionTypes';
import { Container } from '@mui/material';
import CustomerCard from './CustomerCard/CustomerCard';
import Loading from '../Loading/Loading';
import Feedback from '../Feedback/Feedback';
import useStyles from './styles';

function CustomerCards() {
  const { customers, isLoading } = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: ActionTypes.START_LOADING_CUSTOMERS });
    dispatch(getCustomers());
    dispatch({ type: ActionTypes.END_LOADING_CUSTOMERS });
    return () => {};
  }, [dispatch]);

  if (isLoading) return <Loading message="Pobieranie danych ..." />;
  if (!customers.length && !isLoading) return <Feedback message="--- Brak danych ---" />;

  return customers.length !== 0 ? (
    <Container className={classes.customersList}>
      {customers.map((customer) => {
        return <CustomerCard key={customer._id} customer={customer} />;
      })}
    </Container>
  ) : null;
}
export default CustomerCards;
