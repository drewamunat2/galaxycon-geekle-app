import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Typography, Grid, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CloseIcon from '@mui/icons-material/Close';

/*const style = {
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
};*/

const style = {
  maxWidth: '75%',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '10% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
}

const section = {
  textDecoration: 'underline'
}

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
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="help-modal" color="#080357" variant="h6" component="h3" sx={section}>
              General
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 1, mt: 1 }} component='div'> 
              A <Box color='success.main' display='inline'>
                green
              </Box> tile represents an exact match of a desired characteristic, and a <Box color='warning.main' display='inline'>
                yellow
              </Box> tile represents a close guess, which will be further elaborated below..
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 2 }}>
              Guess the character in 8 tries or less and (coming soon) share results with friends!
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="help-modal" color="#080357" variant="h6" component="h4" sx={section}>
              Yellow Tile Specifications
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 1 }}>
              Gender: correctly identifying the species
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 1 }}>
              Role: correctly identifying whether the character is good or bad
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography component='div' id="rules-of-the-game" color="#086788" sx={{ mt: 1 }}>
              Appears In: correctly identifying a show, movie, or video game that<Typography></Typography> the target character 
              is in, but it is not the appearance they are must known for
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 1 }}>
              Genre: correctly identifying a genre of what the target character appears in, but not the main genre
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 1 }}>
              Platform: correctly identifying a platform the target character is in, but it is not the platform they are must known for
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 1, mb:2 }}>
              Year: correctly identifying the decade
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="help-modal" color="#080357" variant="h6" component="h5" sx={section}>
              Rewards
            </Typography>
          </Grid>
          <Grid container justifyContent="center" alignItems="center">
            <Typography id="rules-of-the-game" color="#086788" sx={{ mt: 1, mb:2 }}>
              coming soon!!
            </Typography>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Help;