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
      dark: '#78586F',
    },
    secondary: {
      main: '#fff0ff',
    },
    success: {
      main: '#6CA663',
    },
    warning: {
      main: '#E0CA3C',
    },
    info: {
      main: '#086788'
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#fff0ff',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover" :{
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover" :{
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    }
  },
});

function Header(props) {

  const {openHelp, mode, solution, noTurn, turn, isCorrect, colors, totalGamesWon, totalGamesPlayed, timer} = props;

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{backgroundColor:'#fff0ff'}}>
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6}>
                <Info 
                  solution={solution}
                  isCorrect={isCorrect}
                  noTurn={noTurn}
                  colors={colors}
                  totalGamesPlayed={totalGamesPlayed}
                  totalGamesWon={totalGamesWon}
                  timer={timer}
                  turn={turn}
                  mode={mode}
                  openHelp={openHelp}
                />
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
