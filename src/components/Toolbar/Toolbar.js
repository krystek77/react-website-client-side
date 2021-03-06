/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ActionTypes from '../../constants/actionTypes';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, IconButton, Button, Avatar, Typography } from '@mui/material';
import { ContactMail, Login, Logout, PersonAdd } from '@mui/icons-material';

import useStyles from '../../styles/toolbar';

function Toolbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userProfile')));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();

  const classes = useStyles();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userProfile')));
    return () => {};
  }, [location]);

  const logout = () => {
    dispatch({ type: ActionTypes.LOGOUT });
    history('/');
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
            <Button className={`${classes.toolbarButton}  ${classes.toolbarButtonLogout}`} size="small" component={Link} to="/logowanie" type="button" aria-label="login" startIcon={<Login />}>
              zaloguj
            </Button>
          </React.Fragment>
        )}
        <IconButton className={`${classes.toolbarButton} ${classes.toolbarButtonContact}`} size="small">
          <ContactMail />
        </IconButton>
      </div>
    </Container>
  );
}
export default Toolbar;
