import React, { useState } from "react"
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'
import { useNavigate, Navigate } from 'react-router-dom'
import {useIsAuthenticated} from 'react-auth-kit';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://Galaxycon.com/">
        Galaxycon LLC.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FormError(props) {

  const {showIncorrectError, showUsernameError, showPasswordError} = props;

  const showMessage = () => {
    if(showUsernameError || showPasswordError) {
      if(showUsernameError && showPasswordError) {
        return "username and password can't be empty";
      } else if (showUsernameError) {
        return "username can't be empty";
      } else {
        return "password can't be empty"
      }
    } else if (showIncorrectError) {
      return 'incorrect username or password';
    } else {
      return '';
    }
  }

  return (
    <>
      <Typography component="h7" variant="h" color='error'>
        {showMessage()}
      </Typography>
    </>
  );
}

const theme = createTheme();

export default function Login () {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const isAuthenticated = useIsAuthenticated()
  const [showIncorrectError, setShowIncorrectError] = useState(false)
  const [showUsernameError, setShowUsernameError] = useState(false)
  const [showPasswordError, setShowPasswordError] = useState(false)

  const onSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    if(data.get('username') !== '' && data.get('password') !== ''){
    setShowUsernameError(false);
    setShowPasswordError(false);
    const formData = {username: data.get('username'), password: data.get('password'),}
    console.log(formData)
      e.preventDefault()
      axios.post('http://localhost:5050/authenticate', formData)
      .then((res)=>{
          if(res.status === 200){
              if(signIn({token: res.data.token,
                          expiresIn: 120,
                          tokenType: "Bearer",
                          authState: {name: res.data.name, uid: res.data.uid},
                          /*refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                          refreshTokenExpireIn: res.data.refreshTokenExpireIn*/})){ // Only if you are using refreshToken feature 
                navigate("/admin");
                setShowIncorrectError(false);
              }else {
                alert("Error Occoured. Try Again");
                setShowIncorrectError(true);
              }}
      }).catch(() => {setShowIncorrectError(true)})} else {
        setShowUsernameError(data.get('username') === '');
        setShowPasswordError(data.get('password') === '');
      }
  }

  if(isAuthenticated()){
    return (<Navigate to={'/admin'} replace/>);
  } else {
    return (
      <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, mt: 8 , bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormError 
              showIncorrectError={showIncorrectError}
              showUsernameError={showUsernameError}
              showPasswordError={showPasswordError}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3}}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8 }} />
      </Container>
    </ThemeProvider>
    );
  }   
}