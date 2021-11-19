/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography, Box, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, Avatar } from '@mui/material';
import { Visibility, VisibilityOff, Login, VpnKey } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { signin } from '../actions/users';

import useStyles from '../styles/auth';

function Signin() {
  const classes = useStyles();
  const [authData, setAuthData] = useState({ email: '', password: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAuth = (e) => {
    e.preventDefault();
    dispatch(signin(authData, history));
    clear();
  };
  const clear = () => {
    setAuthData({ email: '', password: '' });
    setIsPasswordVisible(false);
  };

  return (
    <Container component="main" maxWidth="sm" className={`${classes.page} ${classes.pageAuth}`}>
      <Avatar className={`${classes.pageAuthAvatar}`}> <VpnKey /> </Avatar>
      <Typography className={`${classes.pageAuthTitle}`} component="h2" variant="h4" textAlign="center" gutterBottom> zaloguj się </Typography>
      <Box component="form" className={`${classes.pageAuthForm}`} onSubmit={handleAuth}>
        <FormControl className={`${classes.pageAuthFormControl}`} variant="standard" fullWidth margin="dense">
          <TextField className={`${classes.pageAuthInput}`} required label="email" type="text" name="email" value={authData.email} placeholder="email" onChange={(e) => setAuthData({ ...authData, email: e.target.value })} variant="standard" />
        </FormControl>
        <FormControl className={`${classes.pageAuthFormControl}`} variant="standard" fullWidth margin="dense" required>
          <InputLabel className={`${classes.pageAuthLabel}`} htmlFor="outlined-adornment-password">
            {' '}
            hasło{' '}
          </InputLabel>
          <Input
            className={`${classes.pageAuthInput}`}
            id="outlined-adornment-password"
            label="hasło"
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            placeholder="hasło"
            value={authData.password}
            onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton className={`${classes.pageAuthIconInput}`} aria-label="toggle password visibility" onClick={() => setIsPasswordVisible((prevState) => !prevState)} onMouseDown={() => setIsPasswordVisible((prevState) => !prevState)}>
                  {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={`${classes.pageAuthFormControl} ${classes.pageAuthFormControlActions}`} variant="standard" fullWidth margin="normal">
          <Button className={`${classes.pageAuthButton}`} type="submit" variant="contained" endIcon={<Login />}> Zaloguj się </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
export default Signin;
