/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { Container, Grid, Card, CardHeader, CardContent, List, ListItem, CardActions, Collapse, ButtonBase, IconButton, Button, CardMedia, Avatar, Typography, Paper, Divider } from '@mui/material';
import { Phone, Email, ExpandMore } from '@mui/icons-material';
import Hero from '../components/Hero/Hero';

import { styled } from '@mui/styles';
import useStyles from '../styles/contact';

const ExpandMoreButton = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ expand }) => ({
  marginLeft: 'auto',
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

function Contact() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <Hero bgImage="contact" title="Dane firmy" subtitle="skontaktuj się z nami" blendMode="normal" />
      <Container maxWidth="false" className={`${classes.companyData}`}>
        <Card className={`${classes.companyDataAdress}`} elevation={0}>
          <CardHeader className={classes.companyDataName} avatar={<Avatar src="../assets/images/contact/firma.webp" alt="" />} title="P.P.U.P PRALMA sp. z o.o." subheader="Przedsiębiorstwo Produkcji Urządzeń Pralniczych Pralma sp. z o.o., 25-651 Kielce, ul. Górnicza 49a" />
          <CardContent className={classes.companyDataDescription}>
            <Typography className={classes.companyDataText} variant="body2" gutterBottom>
              Producent przemysłowych maszyn pralniczych oraz urządzęń do transportu i składowania prania. Od 1992 roku autoryzowany przedstawiciel handlowy oraz serwis, najpopularniejszych obecnie, przemysłowych urządzeń pralniczych marki <strong>Primus</strong>.
            </Typography>
          </CardContent>
          <CardActions>
            <ButtonBase href="tel:413450561">
              <IconButton className={`${classes.companyDataContact}`} aria-label="zadzwwoń">
                <Phone />
              </IconButton>
            </ButtonBase>
            <ButtonBase href="mailto:biuro@pralma.pl">
              <Button className={`${classes.companyDataContact}`} aria-label="napisz" startIcon={<Email />}>
                biuro@pralma.pl
              </Button>
            </ButtonBase>
            <ExpandMoreButton className={`${classes.companyDataIcon}`} expand={expanded} aria-label="pokaż więcej" aria-expanded={expanded} onClick={handleExpandClick}>
              <ExpandMore />
            </ExpandMoreButton>
          </CardActions>
          <Collapse className={classes.companyDataDetails} in={expanded} timeout="auto" unmountOnExit>
            <CardContent className="">
              <Typography component="p">
                <Typography component="span" variant="body2" sx={{ display: 'inline-block', width: 80, fontWeight: 600 }}>
                  NIP:
                </Typography>
                <Typography component="span" variant="body1">
                  657-008-11-16
                </Typography>
              </Typography>
              <Typography component="p">
                <Typography component="span" variant="body2" sx={{ display: 'inline-block', width: 80, fontWeight: 600 }}>
                  REGON:
                </Typography>
                <Typography component="span" variant="body1">
                  290022092
                </Typography>
              </Typography>
              <Typography component="p">
                <Typography component="span" variant="body2" sx={{ display: 'inline-block', width: 80, fontWeight: 600 }}>
                  KRS:
                </Typography>
                <Typography component="span" variant="body1">
                  0000022564
                </Typography>
              </Typography>
              <Typography component="p">
                <Typography component="span" variant="body2" sx={{ display: 'inline-block', width: 80, fontWeight: 600 }}>
                  KONTO:
                </Typography>
                <Typography component="span" variant="body1">
                  Alior Bank: 71-24-900005-0000453097384961
                </Typography>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Container>

      <Container component="main" className={`${classes.page} ${classes.pageContact}`}>
        <Grid className={classes.companyContact} container rowSpacing={3} columnSpacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12}>
            <Typography className={classes.companyContactTitle} component="h2" variant="h6" noWrap>
              Dział handlowy
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
              <CardHeader className={classes.companyContactHeader} avatar={<Avatar>B</Avatar>} title="Centrala - sprzedaż urządzeń i części zamiennych" subheader={'tel./fax +48 (41) 34 505 61'} />
              <CardContent className={classes.companyContactHeader}>
                <CardMedia className={classes.companyContactImage} component="img" height="194" image="../assets/images/contact/centrala.webp" alt="Centrala - sprzedaż urządzeń i części zamiennych" />
                <Typography className={classes.companyContactDescription} variant="body2" color="text.secondary" gutterBottom>
                  Masz pytania dotyczące wyposażenia pralni przemysłowej, chcesz rozbudować istniejącą pralnię, potrzebujesz oferty lub części zamiennych, a może szukasz kontaktu z konkretną osobą z firmy, zadzwoń lub napisz do nas.
                </Typography>
                <Typography className={classes.companyContactTitleList} component="p" variant="body2" noWrap>
                  Pozostałe telefony
                </Typography>
                <List className={classes.companyContactList}>
                  <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 74 08</ListItem>
                  <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 38 56</ListItem>
                  <ListItem className={classes.companyContactListItem}>tel./fax +48 (41) 368 35 49</ListItem>
                </List>
              </CardContent>
              <Divider light />
              <CardActions>
                <ButtonBase href="tel:413450561">
                  <IconButton className={classes.companyContactAction} aria-label="zadzwwoń">
                    <Phone />
                  </IconButton>
                </ButtonBase>
                <ButtonBase href="mailto:postmaster@pralma.pl">
                  <Button className={classes.companyContactAction} aria-label="napisz" startIcon={<Email />}>
                    postmaster@pralma.pl
                  </Button>
                </ButtonBase>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
              <CardHeader className={classes.companyContactHeader} avatar={<Avatar>K</Avatar>} title="Sprzedaź urządzeń i części zamiennych" subheader={'kom. 602 191 607'} />
              <CardContent className={classes.companyContactContent}>
                <CardMedia className={classes.companyContactImage} component="img" height="194" image="../assets/images/contact/handel.webp" alt="Sprzedaź urządzeń i części zamiennych" />
                <Typography className={classes.companyContactDescription} variant="body2" color="text.secondary" gutterBottom>
                  Masz pytania dotyczące wyposażenia pralni przemysłowej, chcesz rozbudować istniejącą pralnię, potrzebujesz części zamiennych, zadzwoń lub napisz do nas.
                </Typography>
                <Typography className={classes.companyContactTitleList} component="p" variant="body2" noWrap>
                  Pozostałe telefony
                </Typography>
                <List className={classes.companyContactList}>
                  <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 08 25</ListItem>
                  <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 08 27</ListItem>
                  <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 08 28</ListItem>
                </List>
              </CardContent>
              <CardActions>
                <ButtonBase href="tel:602191607">
                  <IconButton className={classes.companyContactAction} aria-label="zadzwwoń">
                    <Phone />
                  </IconButton>
                </ButtonBase>
                <ButtonBase href="mailto:k.wrona@pralma.pl">
                  <Button className={classes.companyContactAction} aria-label="napisz" startIcon={<Email />}>
                    k.wrona@pralma.pl
                  </Button>
                </ButtonBase>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.companyContactTitle} component="h2" variant="h6" noWrap>
              Dział serwisu
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
              <CardHeader className={classes.companyContactHeader} avatar={<Avatar>W</Avatar>} title="Szef serwisu" subheader={'kom. 664 962 002'} />
              <CardContent className={classes.companyContactContent}>
                <CardMedia className={classes.companyContactImage} component="img" height="194" image="../assets/images/contact/serwis1.webp" alt="Serwis urządzeń, pomoc techniczna" />
                <Typography className={classes.companyContactDescription} variant="body2" color="text.secondary" gutterBottom>
                  Potrzebujesz pomocy technicznej z zakresu instalacji, obsługi. lub eksploatacji urządzenia, amoże chcesz zlecić naprawę pogwrancyjną lub gwarancyjną twojego urządzenia lub masz inny problem techniczny z urządzeniem, zadzwoń lub napisz do nas.
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonBase href="tel:664962002">
                  <IconButton className={classes.companyContactAction} aria-label="zadzwwoń">
                    <Phone />
                  </IconButton>
                </ButtonBase>
                <ButtonBase href="mailto:serwis@pralma.pl">
                  <Button className={classes.companyContactAction} aria-label="napisz" startIcon={<Email />}>
                    serwis@pralma.pl
                  </Button>
                </ButtonBase>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
              <CardHeader className={classes.companyContactHeader} avatar={<Avatar>Sz</Avatar>} title="Serwis" subheader={'kom. 666 350 354'} />
              <CardContent className={classes.companyContactContent}>
                <CardMedia className={classes.companyContactImage} component="img" height="194" image="../assets/images/contact/serwis2.webp" alt="Serwis urządzeń, pomoc techniczna" />
                <Typography className={classes.companyContactDescription} variant="body2" color="text.secondary" gutterBottom>
                  Potrzebujesz pomocy technicznej z zakresu instalacji, obsługi lub eksploatacji urządzeń, maszyna nie działa jak oczekujesz, zadzwoń lub napisz do nas.
                </Typography>
              </CardContent>
              <CardActions>
                <ButtonBase href="tel:666350354">
                  <IconButton className={classes.companyContactAction} aria-label="zadzwwoń">
                    <Phone />
                  </IconButton>
                </ButtonBase>
                <ButtonBase href="mailto:serwis@pralma.pl">
                  <Button className={classes.companyContactAction} aria-label="napisz" startIcon={<Email />}>
                    serwis@pralma.pl
                  </Button>
                </ButtonBase>
              </CardActions>
            </Card>
          </Grid>
          <Grid container item rowSpacing={3} columnSpacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <Typography className={classes.companyContactTitle} component="h2" variant="h6" noWrap>
                Księgowość
              </Typography>

              <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                <CardHeader className={classes.companyContactHeader} avatar={<Avatar>K</Avatar>} title="Dokumenty sprzedaży, zakupu" subheader={'tel./fax (41) 34 505 61'} />
                <CardContent className={classes.companyContactHeader}>
                  <CardMedia className={classes.companyContactImage} component="img" height="194" image="../assets/images/contact/documents.webp" alt="Dokumenty sprzedaży, zakupu" />
                  <Typography className={classes.companyContactDescription} variant="body2" color="text.secondary" gutterBottom>
                    Nie otrzymałeś faktury, chcesz zapytać o planowany termin dostawy lub inną sprawę związaną z realziacją zamówienia, zadzwoń lub napisz do nas.
                  </Typography>
                  <Typography className={classes.companyContactTitleList} component="p" variant="body2">
                    Pozostałe telefony
                  </Typography>
                  <List className={classes.companyContactList}>
                    <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 74 08</ListItem>
                    <ListItem className={classes.companyContactListItem}>tel.+48 (41) 345 38 56</ListItem>
                    <ListItem className={classes.companyContactListItem}>tel./fax +48 (41) 368 35 49</ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <ButtonBase href="tel:413450561">
                    <IconButton aria-label="zadzwwoń">
                      <Phone />
                    </IconButton>
                  </ButtonBase>
                  <ButtonBase href="mailto:postmaster@pralma.pl">
                    <Button aria-label="napisz" startIcon={<Email />}>
                      postmaster@pralma.pl
                    </Button>
                  </ButtonBase>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography className={classes.companyContactTitle} component="h2" variant="h6" noWrap>
                Dyrektor
              </Typography>
              <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                <CardHeader className={classes.companyContactHeader} avatar={<Avatar>Z</Avatar>} title="Umowy, sprzedaż urządzeń, sprawy księgowe, pozostałe" subheader={'tel./fax 41 368 35 49'} />
                <CardActions>
                  <ButtonBase href="tel:413683549">
                    <IconButton className={classes.companyContactAction} aria-label="zadzwwoń">
                      <Phone />
                    </IconButton>
                  </ButtonBase>
                  <ButtonBase href="mailto:biuro@pralma.pl">
                    <Button className={classes.companyContactAction} aria-label="napisz" startIcon={<Email />}>
                      biuro@pralma.pl
                    </Button>
                  </ButtonBase>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
export default Contact;
