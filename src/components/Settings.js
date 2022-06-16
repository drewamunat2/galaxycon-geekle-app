import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Grid, } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#eddee1',
  boxShadow: 10,
  borderRadius: '1%',
  textAlign: 'center',
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
          mx: "10px",
          msOverflowY: 'scroll',
          position: 'absolute',
        }}
      >
        <Grid container sx={style}>
          <Grid container justifyContent="right" alignItems="center">
              <IconButton onClick={() => setOpen(false)} sx={{ px: -6 }}>
                <CloseIcon />
              </IconButton>
            </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Settings;