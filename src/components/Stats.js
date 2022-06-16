import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Grid } from '@mui/material';
import {IoIosStats} from "react-icons/io"

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

function Stats(props) {

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
        <IoIosStats/>
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
        </Grid>
      </Modal>
    </>
  );
};

export default Stats;