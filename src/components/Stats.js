import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { Modal, Grid, Typography } from '@mui/material';
import {IoIosStats} from "react-icons/io"
import CloseIcon from '@mui/icons-material/Close';
import EasyModeNoSolution from './EasyModeNoSolution';
import EasyModeSolution from './EasyModeSolution';

const style = {
  maxWidth: 1200,
  maxHeight: 700,
  width: '75%',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '2.5% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};

const styleMobile = {
  maxWidth: '325px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '15% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2,
  overflow: 'scroll'
};

const styleNoSolution = {
  maxWidth: '325px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '10% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 3,
  py: 2
};

function Stats(props) {

  const { mode, solution, noTurn, turn, isCorrect, colors, timer, totalGamesWon, totalGamesPlayed } = props;
  const [winPopUpHappened, setWinPopUpHappened] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    if(isCorrect || noTurn) {
      setOpen(true);
    }
  },[isCorrect, noTurn]);

  if(noTurn || isCorrect) {

    if(!winPopUpHappened){
      setOpen(true);
      setWinPopUpHappened(true);
    }

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
          disableAutoFocus={true}
          sx={{
            position: 'absolute',
            overflow: 'scroll',
            display: { xs: 'none', lg: 'flex'}
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
                Statistics
              </Typography>
            </Grid>
            <EasyModeSolution 
              solution={solution}
              isCorrect={isCorrect}
              colors={colors}
              totalGamesPlayed={totalGamesPlayed}
              totalGamesWon={totalGamesWon}
              turn={turn}
              mode={mode}
            />  
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 1, mb: 1 }}>
                  New Characters in:
                </Typography>
                <Typography display='block' id="rules-of-the-game" color="#a8a8a8" variant="h3" sx={{ mb: 2, mt: -1 }}>
                  {timer}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
        <Modal
          aria-labelledby="help-modal"
          aria-describedby="rules-of-the-game"
          open={open}
          onClose={handleClose}
          display='block'
          disableAutoFocus={true}
          sx={{
            position: 'absolute',
            overflow: 'scroll',
            display: { xs: 'flex', lg: 'none'}
          }}
        >
          <Grid container sx={styleMobile}>
            <Grid container justifyContent="right" alignItems="center">
              <IconButton onClick={() => setOpen(false)} sx={{ mx: -3, mt: -3, pt: 2 }}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{mt: -3}}>
              <Typography id="help-modal" color="#086788" variant="h3" component="h2">
                Statistics
              </Typography>
            </Grid>
            <EasyModeSolution 
              solution={solution}
              isCorrect={isCorrect}
              colors={colors}
              totalGamesPlayed={totalGamesPlayed}
              totalGamesWon={totalGamesWon}
              turn={turn}
              mode={mode}
            />  
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 1, mb: 1 }}>
                  New Character in:
                </Typography>
                <Typography display='block' id="rules-of-the-game" color="#a8a8a8" variant="h3" sx={{ mb: 1, mt: -1 }}>
                  {timer}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <IconButton color="primary" onClick={handleOpen} sx={{"&:hover": {color: '#086788'}}}>
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
          <Grid container sx={styleNoSolution}>
            <Grid container justifyContent="right" alignItems="center">
              <IconButton onClick={() => setOpen(false)} sx={{ mx: -3, mt: -3, pt: 2 }}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{mt: -3}}>
              <Typography id="help-modal" color="#086788" variant="h3" component="h2">
                Statistics
              </Typography>
            </Grid>
            <EasyModeNoSolution
              totalGamesPlayed={totalGamesPlayed}
              totalGamesWon={totalGamesWon}
            />  
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 1, mb: 1 }}>
                  New Character in:
                </Typography>
                <Typography display='block' id="rules-of-the-game" color="#a8a8a8" variant="h3" sx={{ mb: 2, mt: -1 }}>
                  {timer}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Modal>
      </>
    );
  }
};

export default Stats;