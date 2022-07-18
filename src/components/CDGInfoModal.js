import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Grid, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  maxWidth: '350px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '30px auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};

function CDGInfoModal() {

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
        <InfoIcon/>
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
              How To Use
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" sx={{mt: 3}}>
            <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6">
              Easy Mode is activated, which allows access to the full character list data.
              Each category is sortable and filterable, with the option to hide and show each column.
              "All appearances, platforms, and genres" categories are hidden and can be unhidden if needed.
              To sort rows by a specific column, hit the arrow in the column header to indicate sorting in ascending or descending order. 
              For more advanced filtering, click the three dots in the column header.
            </Typography>
          </Grid>  
        </Grid>
      </Modal>
    </>
  );
};

export default CDGInfoModal;