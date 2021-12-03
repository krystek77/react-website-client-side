/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, FormControl, InputLabel, Input, InputAdornment, IconButton, Button, Avatar, Divider,FormControlLabel,RadioGroup,Radio,FormLabel } from '@mui/material';
import { Visibility, VisibilityOff, Login, VpnKey } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';
import {createAccount} from '../../actions/admin';

import useStyles from '../../styles/createAccount';

function CreateAccount() {
  const [userData, setUserData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    password: '', 
    confirmPassword: '',
    role:'user',
    selectedImage:'' });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    dispatch(createAccount(userData));
    clear();
  };
  const clear = () => {
    setUserData({ email: '', password: '', confirmPassword: '', firstName: '', lastName: '',role:'user',selectedImage:'' });
    setIsPasswordVisible(false);
    setIsConfirmPasswordVisible(false);
  };

  return (
    <Container component="main" maxWidth="sm" className={`${classes.page} ${classes.pageCreateAccount}`}>
      <Avatar className={`${classes.pageCreateAccountAvatar}`}><VpnKey/></Avatar>
      <Typography className={`${classes.pageCreateAccountTitle}`} component="h2" variant="h4" textAlign="center" gutterBottom> zarejestruj użytkownika </Typography>
      <Box component="form" className={`${classes.pageCreateAccountForm}`} onSubmit={handleCreateAccount}>
        <FormControl className={`${classes.pageCreateAccountFormControl} ${classes.pageCreateAccountFormControlNames}`} variant="standard" fullWidth margin="dense">
          <TextField className={`${classes.pageCreateAccountInput}`} required label="firstName" type="text" name="firstName" value={userData.firstName} placeholder="imię" onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} variant="standard" />
          <TextField className={`${classes.pageCreateAccountInput}`} required label="lastName" type="text" name="lastName" value={userData.lastName} placeholder="nazwisko" onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} variant="standard" />
        </FormControl>
        <FormControl className={`${classes.pageCreateAccountFormControl}`} variant="standard" fullWidth margin="dense">
          <TextField className={`${classes.pageCreateAccountInput}`} required label="email" type="text" name="email" value={userData.email} placeholder="email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} variant="standard" />
        </FormControl>
        <FormControl className={`${classes.pageCreateAccountFormControl}`} variant="standard" fullWidth margin="dense" required>
          <InputLabel className={`${classes.pageCreateAccountLabel}`} htmlFor="outlined-adornment-password"> hasło </InputLabel>
          <Input
            className={`${classes.pageCreateAccountInput}`}
            id="outlined-adornment-password"
            label="hasło"
            type={isPasswordVisible ? 'text' : 'password'}
            name="password"
            placeholder="hasło"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton className={`${classes.pageCreateAccountIconInput}`} aria-label="toggle password visibility" onClick={() => setIsPasswordVisible((prevState) => !prevState)} onMouseDown={() => setIsPasswordVisible((prevState) => !prevState)}>
                  {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={`${classes.pageCreateAccountFormControl}`} variant="standard" fullWidth margin="dense" required>
          <InputLabel className={`${classes.pageCreateAccountLabel}`} htmlFor="outlined-adornment-confirm-password"> powtórz hasło </InputLabel>
          <Input
            className={`${classes.pageCreateAccountInput}`}
            id="outlined-adornment-confirm-password"
            label="potwierdź hasło"
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="potwierdź hasło"
            value={userData.confirmPassword}
            onChange={(e) => setUserData({ ...userData, confirmPassword: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton className={`${classes.pageCreateAccountIconInput}`} aria-label="toggle password visibility" onClick={() => setIsConfirmPasswordVisible((prevState) => !prevState)} onMouseDown={() => setIsConfirmPasswordVisible((prevState) => !prevState)}>
                  {isConfirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Divider className={classes.pageCreateAccountDivider} light/>
        <FileBase64 type="file" multiple={false} onDone={({ base64 }) => setUserData({ ...userData, selectedImage: base64 })} />
        <Divider className={classes.pageCreateAccountDivider} light/>

        <RadioGroup
          value={userData.role}
          onChange={(e)=>{setUserData({...userData,role:e.target.value})}}
          className={`${classes.pageCreateAccountFormControl} ${classes.pageCreateAccountFormControlRoles}`}
          aria-label="role"
          name="radio-buttons-group">
            <FormLabel component="legend" className={classes.pageCreateAccountFormControlTitle}>Rola:</FormLabel>
            <FormControlLabel className={`${classes.pageCreateAccountRole}`}  control={<Radio value="user"/>}   label="użytkownik"/>
            <FormControlLabel className={`${classes.pageCreateAccountRole}`}  control={<Radio value="admin"/>}  label="administrator"/>
        </RadioGroup>
        <FormControl className={`${classes.pageCreateAccountFormControl} ${classes.pageCreateAccountFormControlActions}`} variant="standard" fullWidth margin="normal">
          <Button className={`${classes.pageCreateAccountButton}`} type="submit" variant="contained" endIcon={<Login />}> Zarejestruj użytkownika </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
export default CreateAccount;
