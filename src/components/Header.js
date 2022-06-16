import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';

import Info from "./Info";
import Social from "./Social"

const theme = createTheme({
  palette: {
    primary: {
      main: '#78586F90',
    },
    secondary: {
      main: '#fff0ff',
    },
    success: {
      main: '#BDD358',
    },
    warning: {
      main: '#fff700',
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        control: {
          backgroundColor: '#fff0ff'
        }
      }
    }
  },
});

function Header() {

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{backgroundColor:'#fff0ff'}}>
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6}>
                <Info />
              </Grid>
              <Grid item xs={6}>
                <Social />
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
