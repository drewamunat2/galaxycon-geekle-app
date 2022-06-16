import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Grid, Typography} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  maxWidth: '75%',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '10% auto',
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
              <IconButton onClick={() => setOpen(false)} sx={{ px: -6 }}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{mt: -3}}>
              <Typography id="help-modal" color="#080357" variant="h3" component="h2">
                How to Play
              </Typography>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
              <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 2, mt: 2 }}>
                Guess the Galaxycon character in as few tries as possible, where 
                each character guessed will provide hints about the 
                target character
              </Typography>
            </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Settings;