/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionTypes from '../constants/actionTypes';
import { getCustomerByID } from '../actions/customers';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading/Loading';
import useStyles from '../styles/customerDetails';

function CustomerDetails() {
  const { id: _id } = useParams();
  const { customer, isLoading } = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: ActionTypes.START_LOADING_CUSTOMERS });
    dispatch(getCustomerByID(_id));
    dispatch({ type: ActionTypes.END_LOADING_CUSTOMERS });
    return () => {};
  }, [dispatch, _id]);

  if (isLoading) return <Loading message="Pobieranie szczegółów ..." />;

  return customer ? (
    <React.Fragment>
      <Hero title={customer.title} subtitle={customer.subtitle} bgImage={`customers/${customer.image}`} blendColor="grey" blendMode="screen" />
      <Container className={`${classes.page} ${classes.pageCustomerDetails}`} maxWidth="false">
        Customer Details width ID: {_id}
      </Container>
      ;
    </React.Fragment>
  ) : null;
}
export default CustomerDetails;
