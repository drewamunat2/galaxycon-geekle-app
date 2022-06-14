import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//import logo from '../assets/GalaxyconlogoSmall.jpeg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import HistoryIcon from '@mui/icons-material/History';
//import TimelineIcon from '@mui/icons-material/Timeline';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import {IoIosStats} from "react-icons/io"
//IoShareSocialOutline
import {FaTiktok, FaYoutube} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#78586F90',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#fff0ff',
    },
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

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#fff0ff",
  }),
  menu: base => ({
    ...base,
    background: "#fff0ff",
  }),
  menuList: base => ({
    ...base,
    background: "#fff0ff",
  })
};

function Header() {

  const [profileMenu, setProfileMenu] = React.useState(null);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{backgroundColor:'#fff0ff'}}>
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={6}>
                <Paper 
                  elevation={0} 
                  square={true}
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                    backgroundColor: '#fff0ff' 
                  }}
                > 
                  <IconButton />
                  <IconButton color="primary">
                    <HelpOutlineIcon/>
                  </IconButton>
                  <IconButton color="primary">
                    <SettingsIcon/>
                  </IconButton>
                  <IconButton color="primary">
                    <IoIosStats/>
                  </IconButton>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper 
                  elevation={0} 
                  square={true}
                  sx={{
                    display: { xs: "none", lg: "flex" },
                    justifyContent: "right",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                    backgroundColor: '#fff0ff' 
                  }}
                > 
                  <IconButton color="primary" href='https://www.facebook.com/galaxyconlive/'>
                    <FacebookIcon/>
                  </IconButton>
                  <IconButton color="primary" href='https://www.instagram.com/galaxyconlive/'>
                    <InstagramIcon/>
                  </IconButton>
                  <IconButton color="primary" href='https://twitter.com/galaxyconlive'>
                    <TwitterIcon/>
                  </IconButton>
                  <IconButton color="primary" href='https://www.youtube.com/galaxycon'>
                    <FaYoutube/>
                  </IconButton>
                  <IconButton color="primary" href='https://www.tiktok.com/@galaxycon'>
                    <FaTiktok/>
                  </IconButton>
                  <IconButton 
                    color="primary" 
                    href='mailto:info@galaxycon.com?subject=Geekle Help'
                  >
                    <EmailIcon/>
                  </IconButton>
                  <IconButton color="primary" href='https://galaxycon.com/'>
                    <LanguageIcon/>
                  </IconButton>
                  <IconButton />
                </Paper>
                <Paper 
                  elevation={0} 
                  square={true}
                  sx={{
                    display: { xs: "flex", lg: "none" },
                    justifyContent: "right",
                    alignItems: "center",
                    textAlign: "center",
                    verticalAlign: "middle",
                    backgroundColor: '#fff0ff' 
                  }}
                > 
                  <IconButton
                    aria-haspopup='true'
                    aria-controls='social-menu'
                    onClick={e => setProfileMenu(e.currentTarget)}
                    aria-label="Open Social Media"
                    title="Open Social Media"
                    color="primary"
                  >
                    <AiOutlineMenu/>
                  </IconButton>
                  <Menu 
                    style={customStyles}
                    id='social-menu' 
                    open={Boolean(profileMenu)} 
                    anchorEl={profileMenu}
                    onClose={() => setProfileMenu(null)}
                    disableAutoFocusItem
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <MenuItem backgroundColor='#fff0ff'>
                      <IconButton color="primary" href='https://www.facebook.com/galaxyconlive/'>
                        <FacebookIcon/>
                      </IconButton>
                      <IconButton color="primary" href='https://www.instagram.com/galaxyconlive/'>
                        <InstagramIcon/>
                      </IconButton>
                      <IconButton color="primary" href='https://twitter.com/galaxyconlive'>
                        <TwitterIcon/>
                      </IconButton>
                      <IconButton color="primary" href='https://www.youtube.com/galaxycon'>
                        <FaYoutube/>
                      </IconButton>
                      <IconButton color="primary" href='https://www.tiktok.com/@galaxycon'>
                        <FaTiktok/>
                      </IconButton>
                      <IconButton 
                        color="primary" 
                        href='mailto:info@galaxycon.com?subject=Geekle Help'
                      >
                        <EmailIcon/>
                      </IconButton>
                      <IconButton color="primary" href='https://galaxycon.com/'>
                        <LanguageIcon/>
                      </IconButton>
                    </MenuItem>
                  </Menu>
                  <IconButton />
                </Paper>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
