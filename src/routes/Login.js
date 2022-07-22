import React from "react"
import axios from 'axios'
import { useSignIn } from 'react-auth-kit'
import { useNavigate, Navigate } from 'react-router-dom'
import {useIsAuthenticated} from 'react-auth-kit';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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

const theme = createTheme();

export default function Login () {
  const navigate = useNavigate()
  const signIn = useSignIn()
  const isAuthenticated = useIsAuthenticated()

  const onSubmit = (e) => {
    const data = new FormData(e.currentTarget);
    const formData = {username: data.get('username'), password: data.get('password'),}
    console.log(formData)
      e.preventDefault()
      axios.post('http://localhost:5050/authenticate', formData)
          .then((res)=>{
            console.log("successful post")
              if(res.status === 200){
                  console.log("status = 200", res.data)
                  if(signIn({token: res.data.token,
                              expiresIn: 120,
                              tokenType: "Bearer",
                              authState: {name: res.data.name, uid: res.data.uid},
                              /*refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                              refreshTokenExpireIn: res.data.refreshTokenExpireIn*/})){ // Only if you are using refreshToken feature
                    console.log('signed in', isAuthenticated())  
                    navigate("/admin");
                  }else {
                    alert("Error Occoured. Try Again");
                  }
              }
          })
  }

  if(isAuthenticated()){
    return (<Navigate to={'/admin'} replace/>);
  } else {
    return (
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    );
    /*return (
      <form onSubmit={onSubmit}>
          <input type={"email"} onChange={(e)=>setFormData({...formData, username: e.target.value})}/>
          <input type={"password"} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>

          <button>Submit</button>
      </form>
    )*/
  }   
}