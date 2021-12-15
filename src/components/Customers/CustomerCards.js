/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import CustomerCard from './CustomerCard/CustomerCard';
import useStyles from './styles';

const data = [
  {
    _id: '1',
    title: 'Kampingi i centra rekracji',
    subtitle: ' Oferta dla miłośników świeżego powietrza oraz dodatkowe usługi przy niskich kosztach inwestycyjnych z Twojej strony',
    image: 'campsite',
  },

  {
    _id: '2',
    title: 'Zdrowie i higiena',
    subtitle: 'Zalety zintegrowanej pralni w szpitalach, klinikach, laboratoriach i klinikach weterynaryjnych',
    image: 'healthandhygiene',
  },
  {
    _id: '3',
    title: 'Kawiarnie, hotele, SPA i restuaracje',
    subtitle: 'Znajdź odpowiednie wyposażenie pralnicze do Twojego hotelu, pensjonatu oraz restauracji',
    image: 'hotelandrestuarants',
  },
];

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
