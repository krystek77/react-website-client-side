/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionTypes from '../constants/actionTypes';
import { getCustomerBySlug, getCustomers } from '../actions/customers';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Container, Box, CardMedia, Typography } from '@mui/material';
import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading/Loading';
import FeedBack from '../components/Feedback/Feedback';
import SectionTitle from '../components/SectionTitle/SectionTitle';

import ReactMarkdown from 'react-markdown';

import useStyles from '../styles/customerDetails';

function CustomerDetails() {
  const { slug } = useParams();
  const location = useLocation();
  const { customer, isLoading, customers } = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: ActionTypes.START_LOADING_CUSTOMERS });
    dispatch(getCustomerBySlug(slug));
    if (customers.length === 0) dispatch(getCustomers());
    dispatch({ type: ActionTypes.END_LOADING_CUSTOMERS });
    return () => {};
  }, [dispatch, slug, customers.length]);

  useEffect(() => {
    let target;
    if (location.hash) {
      target = document.getElementById(location.hash.slice(1));
    } else {
      target = document.getElementById(customer?.slug);
    }
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    return () => {};
  }, [customer, location.hash]);

  if (isLoading) return <Loading message="Pobieranie szczegółów ..." mt={48} />;

  return customer ? (
    <Box id={customer.slug}>
      <Hero title={customer.title} subtitle={customer.subtitle} bgImage={`customers/${customer.image}`} blendColor="#666666" blendMode="screen" />
      <Container component="section" className={`${classes.page} ${classes.pageCustomerDetails}`} maxWidth="false">
        {/** one customer details*/}
        {customer.markdown !== '' ? (
          <Container fixed maxWidth="md">
            <ReactMarkdown className={`${classes.markdown} ${classes[`customer_${customer.slug}`]}`}>{customer.markdown}</ReactMarkdown>
          </Container>
        ) : (
          <FeedBack message="--- Brak treści ---" />
        )}
        {/** END one customer details */}

        {/** other segments */}
        <Container maxWidth="false">
          <SectionTitle title="Inne sektory z potrzebami prania" />
          {customers.length !== 0 ? (
            <Box className={classes.otherSegments}>
              {customers.map((customer) => {
                return (
                  <Link className={classes.otherSegmentsItem} to={`/klienci/${customer.slug}#${customer.slug}`} key={customer._id}>
                    <CardMedia className={classes.otherSegmentsImage} component="img" image={`../assets/images/customers/${customer.image}`} alt={customer.title} />
                    <Typography className={classes.otherSegmentsTitle}>{customer.title}</Typography>
                  </Link>
                );
              })}
            </Box>
          ) : null}
        </Container>
        {/** END other segments */}
      </Container>
      ;
    </Box>
  ) : null;
}
export default CustomerDetails;
