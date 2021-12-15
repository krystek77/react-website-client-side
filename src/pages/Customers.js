import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Box, CardMedia, Typography, Button } from '@mui/material';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Hero from '../components/Hero/Hero';

import useStyles from '../styles/customers';

function Customers() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Hero title="Sektory, którym oferujemy uslugi" subtitle="Różne potrzeby, różne pralnie..., jeden dostawca - Pralma" />
      <Container component="section" className={`${classes.page} ${classes.pageCustomers}`} maxWidth="false">
        <SectionTitle title="Nasi odbiorcy" />

        <Container className={classes.customersList}>
          <Card className={classes.customersListItem}>
            <CardContent className={classes.customersListItemContent}>
              <Typography className={classes.customersListItemTitle} component="h3" variant="h4">
                Kampingi i centra rekracji
              </Typography>
              <Typography className={classes.customersListItemSubtitle} component="p" variant="body1">
                Oferta dla miłośników świeżego powietrza oraz dodatkowe usługi przy niskich kosztach inwestycyjnych z Twojej strony
              </Typography>
              <Button className={classes.customersListItemActionButton} component={Link} to="/" size="large" variant="outlined" color="primary">
                Dowiedz się więcej
              </Button>
            </CardContent>
            <Box className={classes.customersListItemImageWrapper}>
              <CardMedia className={classes.customersListItemImage} component="img" image="../assets/images/customers/campsite.jpg" alt="campsites" />
            </Box>
          </Card>

          <Card className={classes.customersListItem}>
            <CardContent className={classes.customersListItemContent}>
              <Typography className={classes.customersListItemTitle} component="h3" variant="h4">
                Zdrowie i higiena
              </Typography>
              <Typography className={classes.customersListItemSubtitle} component="p" variant="body1">
                Zalety zintegrowanej pralni w szpitalu, przychodni, laboratorium, pomieszczeniu czystym lub przychodni weterynaryjnej.
              </Typography>
              <Button className={classes.customersListItemActionButton} component={Link} to="/" size="large" variant="outlined" color="primary">
                Dowiedz się więcej
              </Button>
            </CardContent>
            <Box className={classes.customersListItemImageWrapper}>
              <CardMedia className={classes.customersListItemImage} component="img" image="../assets/images/customers/healthandhygiene.jpg" alt="health and hygiene" />
            </Box>
          </Card>
        </Container>
      </Container>
    </React.Fragment>
  );
}
export default Customers;
