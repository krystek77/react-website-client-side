/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, IconButton, Button, Avatar, Typography } from '@mui/material';
import { ContactMail, Login, Logout, PersonAdd } from '@mui/icons-material';
import ActionTypes from '../../constants/actionTypes';

import useStyles from '../../styles/toolbar';

function Toolbar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log('[Toolbar.js] - mount');
    setUser(JSON.parse(localStorage.getItem('userProfile')));
    return () => {
      console.log('[Toolbar.js] - unmount');
    };
  }, [location]);

  const logout = () => {
    // console.log('Log out user');
    dispatch({ type: ActionTypes.LOGOUT });
    history.push('/');
  };

  return (
    <Container component="div" maxWidth="false" className={`${classes.toolbar}`}>
      <div className={classes.toolbarUserPanel}>
        {user ? (
          <React.Fragment>
            <Avatar className={classes.toolbarUserAvatar} alt="Krystian" src={user.user.selectedImage || '../assets/images/users/default_user_avatar.png'}>
              {'Krystian'.charAt(0)}
            </Avatar>
            <div className={classes.toolbarUserData}>
              <Typography className={classes.toolbarUserName} component="p" variant="body1">
                {`Witaj, ${user.user.firstName}`}
              </Typography>
              <Typography className={classes.toolbarUserRoles} component="span" variant="caption">
                {`rola: ${user.user.role}`}
              </Typography>
            </div>
            {/** admin panel */}
            {user.user.role === 'admin' && (
              <div className={classes.toolbarAdminPanel}>
                <IconButton className={`${classes.toolbarButton}  ${classes.toolbarAdminPanelAddUser}`} component={Link} to="/admin/utworz-konto-uzytkownika" type="button" aria-label="add user">
                  <PersonAdd />
                </IconButton>
              </div>
            )}

            <Button className={`${classes.toolbarButton} ${classes.toolbarButtonLogout}`} type="button" aria-label="logout" onClick={logout} onMouseDown={logout} startIcon={<Logout />}>
              wyloguj
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Button className={`${classes.toolbarButton}  ${classes.toolbarButtonLogout}`} component={Link} to="/logowanie" type="button" aria-label="login" startIcon={<Login />}>
              zaloguj
            </Button>
          </React.Fragment>
        )}
        <IconButton className={`${classes.toolbarButton} ${classes.toolbarButtonContact}`}>
          <ContactMail />
        </IconButton>
      </div>
    </Container>
  );
}
export default Toolbar;
