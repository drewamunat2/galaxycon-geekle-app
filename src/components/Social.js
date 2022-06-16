import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
//IoShareSocialOutline
import {FaTiktok, FaYoutube} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai";
import { Paper } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#fff0ff",
  }),
  menu: base => ({
    ...base,
    backgroundColor: "#fff0ff",
  }),
  menuList: base => ({
    ...base,
    backgroundColor: "#fff0ff",
  })
};

function Social() {

  const [profileMenu, setProfileMenu] = useState(null);

  return (
    <>
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
          //bgcolor: '#FFF0FF',
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
          <MenuItem>
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
    </>
  );
};

export default Social;