/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';
import { Container, IconButton, Button, Avatar, Typography } from '@mui/material';
import { ContactMail,Login,Logout } from '@mui/icons-material';

import useStyles from '../../styles/toolbar';

function Toolbar() {
  const classes = useStyles();
  const user = null;

  return (
    <Container component="div" maxWidth="false" className={`${classes.toolbar}`}>
      <div className={classes.toolbarUserPanel}>
        {user ? (
          <React.Fragment>
            <Avatar className={classes.toolbarUserAvatar} alt="Krystian" src="./assets/images/contact/firma.webpa">
              {'Krystian'.charAt(0)}
            </Avatar>
            <Typography className={classes.toolbarUserName} component="p" variant="body1">
              Witaj, kryniu77@wp.pl
            </Typography>
            <Button className={`${classes.toolbarButton} ${classes.toolbarButtonLogout}`} type="button" aria-label="logout" startIcon={<Logout/>}>
              wyloguj
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button className={`${classes.toolbarButton}  ${classes.toolbarButtonLogout}`} component={Link} to="/autoryzacja" type="button" aria-label="login" startIcon={<Login/>}>zaloguj</Button>
          </React.Fragment>
        )}
        <IconButton  className={`${classes.toolbarButton} ${classes.toolbarButtonContact}`}>
          <ContactMail />
        </IconButton>
      </div>
    </Container>
  );
}
export default Toolbar;
