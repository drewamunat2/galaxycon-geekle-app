import CharacterDataGrid from "./CharacterDataGrid";
import CDGInfoModal from "./CDGInfoModal";
import { Button, Grid, Modal, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types";
import { createTheme } from '@mui/material/styles';

const style = {
  maxWidth: '1300px',
  bgcolor: '#eddee1',
  borderRadius: '10px',
  margin: '2% auto',
  textAlign: 'center',
  boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
  px: 1,
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200
    }
  },
});

export default function CharacterDataGridModal (props) {

  const { updateMode, mode } = props;

  const big = useMediaQuery(theme.breakpoints.up('laptop'));

  const [showInfo, setShowInfo] = useState(false);
  const [color, setColor] = useState('blue')

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
      setOpen(true);
      setShowInfo(true);
  };
  const handleClose = () => {
      setOpen(false);
  };

  //when character info button is clicked it turns green and app state => EASY mode
  useEffect(() => {
    if(showInfo){
      updateMode();
      setColor('green');
    }
    console.log(53)
  }, [showInfo, updateMode]);

  //checks if mode is EASY on mounting
  useEffect(() => {
    if(mode === 'EASY'){
      setColor('green');
      setShowInfo(true);
    }
    console.log(61)
  }, [mode]);


  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
      >
        <Button 
          variant="contained" 
          sx={{
            my: 1, 
            borderColor: "blue", 
            color: '#FFF0FF', 
            backgroundColor: `${color}`, 
            '&:hover': {
              backgroundColor: `${color}`
            },
            borderRadius: 5}}
          onClick={handleOpen}
        >
          📋 Character Info {showInfo && 'On'}
        </Button>
      </Grid>
      <Modal
        aria-labelledby="help-modal"
        aria-describedby="rules-of-the-game"
        open={open}
        onClose={handleClose}
        display='block'
        disableAutoFocus={true}
        sx={{
          position: 'absolute',
          overflowY: 'auto',
          backgroundColor: "#eddee1"
        }}
      > 
        <Grid container sx={style}>
          <Grid container justifyContent="right" alignItems="center" sx={{bgcolor: '#ffdff050'}}>
            <Grid item xs>
              <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 2, mt: 2 }}>
                Full Character List <CDGInfoModal />
              </Typography>
            </Grid>
            {big ? <Grid item xs={9}/> : <Grid item xs={4}/>}         
            <Grid item>
              <IconButton onClick={() => setOpen(false)} >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
          <CharacterDataGrid sx={{mt:-3}}/>
        </Grid>
      </Modal>
    </>
  );
}

CharacterDataGridModal.propTypes = {
  updateMode: PropTypes.func.isRequired
};