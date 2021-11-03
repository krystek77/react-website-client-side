/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Paper, Container,Typography, Box, Grid, FormControl, InputLabel, Select, MenuItem, TextField,Button } from '@mui/material';
import {Send} from '@mui/icons-material';

import useStyles from './styles';

function ContactForm() {
  const [formData,setFormData] = useState({reason:'',market:'',firstName:'',lastName:'',phone:'',email:'',company:'',zipCode:'',city:'',country:'Poland',message:''});
  const classes = useStyles();

  function handleFormData(e){
      const inputName = e.target.name;
      const inputValue = e.target.value;
      setFormData({...formData,[inputName]:inputValue});
  }

  function send(e){
      e.preventDefault();
      console.log(formData);

      setFormData({reason:'',market:'',firstName:'',lastName:'',phone:'',email:'',company:'',zipCode:'',city:'',country:'Poland',message:''});
  }

  return (
      <Box component="section"className={classes.contactFormWrapper} >
        <Typography component="h2" variant="h6" className={classes.title}>
          Formularz kontaktowy
        </Typography>
        <Container>
          <Typography align="center" paragraph variant="body1">
              Masz pytania dotyczące wydajności lub działania swoich urządzeń marki <strong>Pralma</strong> lub <strong>Primus</strong>? Aby uzyskać pomoc techniczną, rozwiązać problemy z eksploatacją, konserwacją urządzeń, 
              zapytać o serwis urządzeń lub masz dowolne inne pytanie dotyczące wyposażenie pralni przemysłowej lub spraw formalnych, wypełnij i prześlij poniższy formularz.
          </Typography>
          <Box component="form" onSubmit={send} className={classes.contactForm}>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <FormControl required fullWidth variant="standard">
                  <InputLabel id="reason-for-contact-label">Powód kontaktu</InputLabel>
                  <Select labelId="reason-for-contact-label" id="reason" value={formData.reason} label="reason" inputProps={{name:"reason"}} onChange={handleFormData}>
                    <MenuItem value={"Prośba o ofertę"}>Prośba o ofertę</MenuItem>
                    <MenuItem value={"Ogólne zapytanie"}>Ogólne zapytanie</MenuItem>
                    <MenuItem value={"Pomoc techniczna"}>Pomoc techniczna</MenuItem>
                    <MenuItem value={"Części zamienne"}>Części zamienne</MenuItem>
                    <MenuItem value={"Faktury, realizacja"}>Faktury, realizacja</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
              <FormControl required fullWidth variant="standard">
                  <InputLabel id="market-for-contact-label">Rynek</InputLabel>
                  <Select labelId="market-for-contact-label" id="market" value={formData.market} label="market" inputProps={{name:"market"}} onChange={handleFormData}>
                    <MenuItem value={"Hotel / Pensjonat"}>Hotel / Pensjonat</MenuItem>
                    <MenuItem value={"Dom Pomocy Społecznej / Dom Opieki"}>Dom Pomocy Społecznej / Dom Opieki</MenuItem>
                    <MenuItem value={"Szpital / Klinika"}>Szpital / Klinika</MenuItem>
                    <MenuItem value={"Restauracja"}>Restauracja</MenuItem>
                    <MenuItem value={"Służba cywilna"}>Służba cywilna</MenuItem>
                    <MenuItem value={"Pralnia usługowa"}>Pralnia usługowa</MenuItem>
                    <MenuItem value={"Pralnia samoobsługowa"}>Pralnia samoobsługowa</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid container item xs={12} spacing={2} alignItems="flex-start">
                <Grid container item xs={12} md={6} spacing={2}>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth required type="text" name="firstName" variant="standard" label="Imię" value={formData.firstName} onChange={handleFormData}/></Grid>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth type="text" name="lastName" variant="standard" label="Nazwisko" value={formData.lastName} onChange={handleFormData}/></Grid>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth required type="tel" name="phone" variant="standard" label="Telefon" value={formData.phone} onChange={handleFormData}/></Grid>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth required type="email" name="email" variant="standard" label="Email" value={formData.email} onChange={handleFormData}/></Grid>
                </Grid>
                <Grid container item xs={12} md={6} spacing={2}>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth required type="text" name="company" variant="standard" label="Firma" value={formData.company} onChange={handleFormData}/></Grid>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth required type="text" name="city" variant="standard" label="Miasto" value={formData.city} onChange={handleFormData}/></Grid>
                  <Grid item xs={12}><TextField className={classes.inputField} fullWidth type="text" name="zipCode" variant="standard" label="Kod pocztowy" value={formData.zipCode} onChange={handleFormData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}><TextField className={classes.inputField} fullWidth type="text" name="country" variant="standard" label="Państwo" value={formData.country} onChange={handleFormData}/></Grid>
              <Grid item xs={12}><TextField className={classes.inputField} fullWidth required type="text" multiline minRows={4} maxRows={10} name="message" label="Tekst waidomości" value={ formData.message} onChange={handleFormData}/></Grid>
              <Grid item xs={12}> Subscribe checkbox, recaptcha </Grid>
              <Grid item xs={12}> <Button className={classes.btnSubmit} type="submit" variant="contained" size="medium" endIcon={<Send/>}>Wyślij</Button> </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
  );
}
export default ContactForm;
