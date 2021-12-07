import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, InputAdornment, Button } from '@mui/material';
import { Newspaper, Send } from '@mui/icons-material';
import useStyles from './styles';

function Newsletter() {
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      signinToNewsletter();
    }
  };

  const signinToNewsletter = () => {
    console.log('Signin to newsletter');
    clear();
  };
  const clear = () => setEmail('');

  return (
    <Container className={classes.newsletter} component="section" maxWidth="false">
      <Grid container className={classes.newsletterInner} maxWidth="lg">
        <Grid className={classes.newsletterInformation} item xs={12} md={6}>
          <Typography className={classes.newsletterInformationTitle} variant="h1">
            Zapisz się, aby otrzymywać specjalne oferty
          </Typography>
          <Typography className={classes.newsletterInformationSubtitle} variant="caption">
            Wypełnij formularz obok, aby otrzymywać wiadomości od Pralma oraz informacje o nowościach, specjalnych ofertach oraz promocjach.
          </Typography>
        </Grid>
        <Grid className={classes.newsletterForm} item xs={12} md={6}>
          <TextField
            className={classes.newsletterFormInput}
            fullWidth
            placeholder="np. kryniu77@gmail.com"
            label="email"
            type="text"
            name="email"
            variant="standard"
            value={email}
            onKeyPress={handleKeyPress}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Newspaper />
                </InputAdornment>
              ),
            }}
          />
          <Button className={classes.newsletterFormButton} type="button" variant="standard" size="medium" onClick={signinToNewsletter} endIcon={<Send />}>
            Zapisz się
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Newsletter;
