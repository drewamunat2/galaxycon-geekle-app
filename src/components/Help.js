import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Box, Typography, Grid } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';

let closeImg = {cursor:'pointer', float:'right', marginTop: '5px', width: '20px'};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFF0FF',
  boxShadow: 24,
  p: 4,
  borderRadius: '1%',
  textAlign: 'center',
};

function Help(props) {

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
        <HelpOutlineIcon/>
      </IconButton>
      <Modal
        aria-labelledby="help-modal"
        aria-describedby="rules-of-the-game"
        open={open}
        onClose={handleClose}
        sx={{
          mx: "10px"
        }}
      >
        <Box sx={style}>
          <IconButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
          <Typography id="help-modal" color="#080357" variant="h6" component="h2">
            How to play
          </Typography>
          <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 2 }}>
            Rules
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Help;