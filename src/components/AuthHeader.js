import React from 'react'
import {useAuthUser, useSignOut} from 'react-auth-kit';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const AuthHeader = () => {
  const signOut = useSignOut()
  const authUser = useAuthUser()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <AccountCircleIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
            {`${authUser().name}`}
          </Typography>
          <Button color="error" variant="contained" onClick={() => signOut()}>Sign Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AuthHeader;
