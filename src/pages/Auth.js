/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button,Avatar } from '@mui/material';
import { Visibility, VisibilityOff, Login, SwitchLeft, VpnKey } from '@mui/icons-material';

import useStyles from './styles';

function Auth() {
  const classes = useStyles();
  const [authData, setAuthData] = useState({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isSignup,setIsSignup] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();
    clear();
  };
  const clear = () => {
    setAuthData({email: '', password: '', confirmPassword: '', firstName: '', lastName: '' });
    setIsPasswordVisible(false);
    setIsConfirmPasswordVisible(false);
  };
  const switchMode = ()=>{ setIsSignup((prevState)=>!prevState) };

  const user = {
    roles: ['admin', 'user'],
  };
  const isAdmin = user.roles.some((role) => role === 'admin');

  return (
    <Container component="main" maxWidth="sm" className={`${classes.page} ${classes.pageAuth}`}>
      <Avatar className={`${classes.pageAuthAvatar}`}><VpnKey/></Avatar>
      {isSignup ? (
        <Typography className={`${classes.pageAuthTitle}`} component="h2" variant="h4" textAlign="center" gutterBottom> zarejestruj użytkownika </Typography>
      ) : (
        <Typography className={`${classes.pageAuthTitle}`} component="h2" variant="h4" textAlign="center" gutterBottom> zaloguj się </Typography>
      )}

      <Box component="form" className={`${classes.pageAuthForm}`} onSubmit={handleAuth}>
        {isSignup && (
          <FormControl className={`${classes.pageAuthFormControl} ${classes.pageAuthFormControlNames}`} variant="standard" fullWidth margin="dense">
            <TextField className={`${classes.pageAuthInput}`} label="firstName" type="text" name="firstName" value={authData.firstName} placeholder="imię" onChange={(e) => setAuthData({ ...authData, firstName: e.target.value })} variant="standard" />
            <TextField className={`${classes.pageAuthInput}`} label="lastName" type="text" name="lastName" value={authData.lastName} placeholder="nazwisko" onChange={(e) => setAuthData({ ...authData, lastName: e.target.value })} variant="standard" />
          </FormControl>
        )}
        <FormControl className={`${classes.pageAuthFormControl}`} variant="standard" fullWidth margin="dense">
          <TextField className={`${classes.pageAuthInput}`} required label="email" type="text" name="email" value={authData.email} placeholder="email" onChange={(e) => setAuthData({ ...authData, email: e.target.value })} variant="standard" />
        </FormControl>
        <FormControl className={`${classes.pageAuthFormControl}`} variant="standard" fullWidth margin="dense" required>
          <InputLabel className={`${classes.pageAuthLabel}`} htmlFor="outlined-adornment-password"> hasło </InputLabel>
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

        {isSignup && (
          <FormControl className={`${classes.pageAuthFormControl}`} variant="standard" fullWidth margin="dense" required>
            <InputLabel className={`${classes.pageAuthLabel}`} htmlFor="outlined-adornment-confirm-password"> powtórz hasło </InputLabel>
            <Input
              className={`${classes.pageAuthInput}`}
              id="outlined-adornment-confirm-password"
              label="potwierdź hasło"
              type={isConfirmPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="potwierdź hasło"
              value={authData.confirmPassword}
              onChange={(e) => setAuthData({ ...authData, confirmPassword: e.target.value })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton className={`${classes.pageAuthIconInput}`} aria-label="toggle password visibility" onClick={() => setIsConfirmPasswordVisible((prevState) => !prevState)} onMouseDown={() => setIsConfirmPasswordVisible((prevState) => !prevState)}>
                    {isConfirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        )}
        {(isAdmin && !isSignup) && (
          <FormControl className={`${classes.pageAuthFormControl}`} variant="standard" fullWidth margin="dense">
            <Button 
              className={`${classes.pageAuthButton} ${classes.pageAuthButtonSwitch}`} 
              type="button" 
              size="small" 
              aria-label="toggle to register new user" 
              onClick={switchMode} 
              onMouseDown={switchMode} 
              startIcon={<SwitchLeft/>}>
                zarejestruj nowego użytkownika
            </Button>
          </FormControl>)
        }
        {isSignup && (
          <FormControl className={`${classes.pageAuthFormControl} ${classes.pageAuthFormControlSwitch}`} variant="standard" fullWidth margin="dense">
            <Button 
              className={`${classes.pageAuthButton} ${classes.pageAuthButtonSwitch}`} 
              type="button" 
              size="small" 
              aria-label="toggle to login" 
              onClick={switchMode} 
              onMouseDown={switchMode} 
              startIcon={<SwitchLeft/>}>
                Masz konto? Zaloguj się
            </Button>
          </FormControl>
        )}
        <FormControl className={`${classes.pageAuthFormControl} ${classes.pageAuthFormControlActions}`} variant="standard" fullWidth margin="normal">
          {isSignup ? (
            <Button className={`${classes.pageAuthButton}`} type="submit" variant="contained" endIcon={<Login />}> Zarejestruj użytkownika </Button>
          ) : (
            <Button className={`${classes.pageAuthButton}`} type="submit" variant="contained" endIcon={<Login />}> Zaloguj się </Button>
          )}
        </FormControl>
      </Box>
    </Container>
  );
}
export default Auth;
