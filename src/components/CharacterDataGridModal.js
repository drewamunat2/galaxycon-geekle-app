import CharacterDataGrid from "./CharacterDataGrid";
import CDGInfoModal from "./CDGInfoModal";
import { Button, Grid, Modal, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types";
import { createTheme } from '@mui/material/styles';

const initialState = {sorting: {
  sortModel: [{field: 'name', sort:'asc'}]
}}

const columns = [
  {
    field: 'name',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'gender',
    headerName: 'gender',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'species',
    headerName: 'species',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'role',
    headerName: 'role',
    width: 200,
    editable: false,	
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'genRole',
    headerName: 'general role',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'appearsIn',
    headerName: 'main appearance',
    width: 300,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'genre',
    headerName: 'main genre',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'platform',
    headerName: 'main platform',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'owner',
    headerName: 'owner',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'trademarkOwner',
    headerName: 'trademark owner',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'network',
    headerName: 'network',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'universe',
    headerName: 'universe',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'year',
    headerName: 'year',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'decade',
    headerName: 'decade',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'allPlatforms',
    headerName: 'full platform list',
    width: 250,
    editable: false,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'allGenres',
    headerName: 'full genre list',
    width: 950,
    editable: false,
    sortable: false,
    align: 'left',
    headerAlign: 'left',
    hide: true
  },
  {
    field: 'bothAppearsIn',
    headerName: 'all appearances',
    width: 2500,
    editable: false,
    sortable: false,
    align: 'left',
    headerAlign: 'left',
    hide: true
  },
  {
    field: 'title',
    headerName: 'shop name',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center',
    hide: true
  },
  {
    field: 'shop',
    headerName: 'shop link',
    width: 500,
    editable: false,
    align: 'left',
    headerAlign: 'left',
    hide: true
  },
];

const style = {
  maxWidth: '1300px',
  minWidth: '350px',
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


  const { updateMode, mode, updateShowInfo } = props;

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
      updateShowInfo();
      setColor('green');
    }
  }, [showInfo, updateMode, updateShowInfo]);

  //checks if mode is EASY on mounting
  useEffect(() => {
    if(mode === 'EASY'){
      setColor('green');
      setShowInfo(true);
      updateShowInfo();
    }
  }, [mode, updateShowInfo]);

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
              <Typography id="rules-of-the-game" color="#086788" sx={{ mb: 0, mt: 2 }}>
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
          <CharacterDataGrid columns={columns} initialState={initialState} sx={{mt:-3}}/>
        </Grid>
      </Modal>
    </>
  );
}

CharacterDataGridModal.propTypes = {
  updateMode: PropTypes.func.isRequired
};