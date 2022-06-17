import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Grid, Typography, Switch, Link} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  maxWidth: '350px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '100px auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};

function Settings(props) {

  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

  return (
    <>
      <IconButton color="primary" onClick={handleOpen}>
        <SettingsIcon/>
      </IconButton>
      <Modal
        aria-labelledby="help-modal"
        aria-describedby="rules-of-the-game"
        open={open}
        onClose={handleClose}
        display='block'
        sx={{
          position: 'absolute',
          overflow: 'scroll',
        }}
      >
        <Grid container sx={style}>
          <Grid container justifyContent="right" alignItems="center">
            <IconButton onClick={() => setOpen(false)} sx={{ mx: -3, mt: -3, pt: 2 }}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" sx={{mt: -3}}>
            <Typography id="help-modal" color="#086788" variant="h3" component="h2">
              Settings
            </Typography>
          </Grid>
          <Grid container>
            <Grid item alignItems="left" textAlign='left' xs={6}>
              <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
                HARD MODE
              </Typography>
              <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: -1 }}>
                coming soon
              </Typography>
            </Grid>
            <Grid item alignItems="right" textAlign='right' xs={6}>
              <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 2, mt: 2 }}>
                <Switch disabled />
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item alignItems="left" textAlign='left' xs={6}>
              <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 1, mb: 0 }}>
                DARK MODE
              </Typography>
              <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: -1 }}>
                coming soon
              </Typography>
            </Grid>
            <Grid item alignItems="right" textAlign='right' xs={6}>
              <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 2, mt: 2 }}>
                <Switch disabled />
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2, mb: 0 }}>
            <Grid item alignItems="left" textAlign='left' xs={6}>
              <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6">
                CONTACT US
              </Typography>
            </Grid>
            <Grid item alignItems="right" textAlign='right' xs={6}>
              <Link href='mailto:info@galaxycon.com?subject=Geekle'>{'Email'}</Link>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2, mb: 0 }}>
            <Grid item alignItems="left" textAlign='left' xs={6}>
              <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6">
                CHARACTERS
              </Typography>
            </Grid>
            <Grid item alignItems="right" textAlign='right' xs={6}>
              <Link href='https://galaxycon.com/pages/galaxycon-store'>{'Store'}</Link>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 2, mb: 0 }}>
            <Grid item alignItems="left" textAlign='left' xs={6}>
              <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6">
                WEBSITE
              </Typography>
            </Grid>
            <Grid item alignItems="right" textAlign='right' xs={6}>
              <Link href='https://galaxycon.com/'>{'GalaxyCon'}</Link>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Settings;