/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Grid, Card, CardHeader, CardContent, List, ListItem, CardActions, ButtonBase, IconButton, Button, CardMedia, Avatar, Typography } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  contactPage: {
    paddingTop: 80,
    paddingBottom: 80,
  },
  title: {
    fontWeight: 700,
    textAlign:"center",
    [theme.breakpoints.up('md')]: {
      paddingLeft: 50,
      textAlign:"left"
    },
    "&.titleLast":{
        paddingBottom:24,
      },
  },

  header: {
    '& span': {
      fontWeight: 600,
    },
    '& span:last-of-type': {
      color: theme.palette.primary.main,
      fontWeight: 400,
    },
    '& .MuiAvatar-root': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  content: {
    padding: 0,
  },
  image: {
    marginBottom: 16,
  },
  description: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleList: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  list: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  listItem: {
    padding: 0,
    fontSize: 14,
    opacity: 0.6,
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <div style={{minHeight:"400px",backgroundColor:'#c0bca9'}}></div> */}
      <main className={[`${classes.contactPage}`, 'page'].join(' ')}>
        <Container>
          <Grid container xs={12} rowSpacing={3} columnSpacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12}>
              <Typography className={classes.title} component="h2" variant="h6" noWrap>
                Dział handlowy
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                <CardHeader className={classes.header} avatar={<Avatar>B</Avatar>} title="Centrala - sprzedaż urządzeń i części zamiennych" subheader={'tel./fax +48 (41) 34 505 61'} />
                <CardContent className={classes.content}>
                  <CardMedia className={classes.image} component="img" height="194" image="../assets/images/contact/centrala.webp" alt="Centrala - sprzedaż urządzeń i części zamiennych" />
                  <Typography className={classes.description} variant="body2" color="text.secondary" gutterBottom>
                    Masz pytania dotyczące wyposażenia pralni przemysłowej, chcesz rozbudować istniejącą pralnię, potrzebujesz oferty lub części zamiennych, a może szukasz kontaktu z konkretną osobą z firmy, zadzwoń lub napisz do nas.
                  </Typography>
                  <Typography className={classes.titleList} component="p" variant="body2" noWrap>
                    Pozostałe telefony
                  </Typography>
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>tel.+48 (41) 345 74 08</ListItem>
                    <ListItem className={classes.listItem}>tel.+48 (41) 345 38 56</ListItem>
                    <ListItem className={classes.listItem}>tel./fax +48 (41) 368 35 49</ListItem>
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
              <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                <CardHeader className={classes.header} avatar={<Avatar>K</Avatar>} title="Sprzedaź urządzeń i części zamiennych" subheader={'kom. 602 191 607'} />
                <CardContent className={classes.content}>
                  <CardMedia className={classes.image} component="img" height="194" image="../assets/images/contact/handel.webp" alt="Sprzedaź urządzeń i części zamiennych" />
                  <Typography className={classes.description} variant="body2" color="text.secondary" gutterBottom>
                    Masz pytania dotyczące wyposażenia pralni przemysłowej, chcesz rozbudować istniejącą pralnię, potrzebujesz części zamiennych, zadzwoń lub napisz do nas.
                  </Typography>
                  <Typography className={classes.titleList} component="p" variant="body2" noWrap>
                    Pozostałe telefony
                  </Typography>
                  <List className={classes.list}>
                    <ListItem className={classes.listItem}>tel.+48 (41) 345 08 25</ListItem>
                    <ListItem className={classes.listItem}>tel.+48 (41) 345 08 27</ListItem>
                    <ListItem className={classes.listItem}>tel.+48 (41) 345 08 28</ListItem>
                  </List>
                </CardContent>
                <CardActions>
                  <ButtonBase href="tel:602191607">
                    <IconButton aria-label="zadzwwoń">
                      <Phone />
                    </IconButton>
                  </ButtonBase>
                  <ButtonBase href="mailto:k.wrona@pralma.pl">
                    <Button aria-label="napisz" startIcon={<Email />}>
                      k.wrona@pralma.pl
                    </Button>
                  </ButtonBase>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.title} component="h2" variant="h6" noWrap>
                Dział serwisu
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                <CardHeader className={classes.header} avatar={<Avatar>W</Avatar>} title="Szef serwisu" subheader={'kom. 664 962 002'} />
                <CardContent className={classes.content}>
                  <CardMedia className={classes.image} component="img" height="194" image="../assets/images/contact/serwis1.webp" alt="Serwis urządzeń, pomoc techniczna" />
                  <Typography className={classes.description} variant="body2" color="text.secondary" gutterBottom>
                    Potrzebujesz pomocy technicznej z zakresu instalacji, obsługi. lub eksploatacji urządzenia, amoże chcesz zlecić naprawę pogwrancyjną lub gwarancyjną twojego urządzenia lub masz inny problem techniczny z urządzeniem, zadzwoń lub napisz do nas.
                  </Typography>
                </CardContent>
                <CardActions>
                  <ButtonBase href="tel:664962002">
                    <IconButton aria-label="zadzwwoń">
                      <Phone />
                    </IconButton>
                  </ButtonBase>
                  <ButtonBase href="mailto:serwis@pralma.pl">
                    <Button aria-label="napisz" startIcon={<Email />}>
                      serwis@pralma.pl
                    </Button>
                  </ButtonBase>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                <CardHeader className={classes.header} avatar={<Avatar>Sz</Avatar>} title="Serwis" subheader={'kom. 666 350 354'} />
                <CardContent className={classes.content}>
                  <CardMedia className={classes.image} component="img" height="194" image="../assets/images/contact/serwis2.webp" alt="Serwis urządzeń, pomoc techniczna" />
                  <Typography className={classes.description} variant="body2" color="text.secondary" gutterBottom>
                    Potrzebujesz pomocy technicznej z zakresu instalacji, obsługi lub eksploatacji urządzeń, maszyna nie działa jak oczekujesz, zadzwoń lub napisz do nas.
                  </Typography>
                </CardContent>
                <CardActions>
                  <ButtonBase href="tel:666350354">
                    <IconButton aria-label="zadzwwoń">
                      <Phone />
                    </IconButton>
                  </ButtonBase>
                  <ButtonBase href="mailto:serwis@pralma.pl">
                    <Button aria-label="napisz" startIcon={<Email />}>
                      serwis@pralma.pl
                    </Button>
                  </ButtonBase>
                </CardActions>
              </Card>
            </Grid>

            <Grid container item xs={12}  rowSpacing={3} columnSpacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} md={6}>
                <Typography className={[`${classes.title}`,'titleLast'].join(' ')} component="h2" variant="h6" noWrap>
                  Księgowość
                </Typography>

                <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                  <CardHeader className={classes.header} avatar={<Avatar>K</Avatar>} title="Dokumenty sprzedaży, zakupu" subheader={'tel./fax (41) 34 505 61'} />
                  <CardContent className={classes.content}>
                    <CardMedia className={classes.image} component="img" height="194" image="../assets/images/contact/documents.webp" alt="Dokumenty sprzedaży, zakupu" />
                    <Typography className={classes.description} variant="body2" color="text.secondary" gutterBottom>
                      Nie otrzymałeś faktury, chcesz zapytać o planowany termin dostawy lub inną sprawę związaną z realziacją zamówienia, zadzwoń lub napisz do nas.
                    </Typography>
                    <Typography className={classes.titleList} component="p" variant="body2">
                      Pozostałe telefony
                    </Typography>
                    <List className={classes.list}>
                      <ListItem className={classes.listItem}>tel.+48 (41) 345 74 08</ListItem>
                      <ListItem className={classes.listItem}>tel.+48 (41) 345 38 56</ListItem>
                      <ListItem className={classes.listItem}>tel./fax +48 (41) 368 35 49</ListItem>
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
                <Typography className={[`${classes.title}`,'titleLast'].join(' ')} component="h2" variant="h6" noWrap>
                  Dyrektor
                </Typography>
                <Card sx={{ maxWidth: 460, margin: '0 auto' }}>
                  <CardHeader className={classes.header} avatar={<Avatar>Z</Avatar>} title="Umowy, sprzedaż urządzeń, sprawy księgowe, pozostałe" subheader={'tel./fax 41 368 35 49'} />
                  <CardActions>
                    <ButtonBase href="tel:413683549">
                      <IconButton aria-label="zadzwwoń">
                        <Phone />
                      </IconButton>
                    </ButtonBase>
                    <ButtonBase href="mailto:biuro@pralma.pl">
                      <Button aria-label="napisz" startIcon={<Email />}>
                        biuro@pralma.pl
                      </Button>
                    </ButtonBase>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
export default Contact;
