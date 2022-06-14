import IconButton from '@mui/material/IconButton';
//import logo from '../assets/GalaxyconlogoSmall.jpeg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import {IoIosStats} from "react-icons/io"
//import HistoryIcon from '@mui/icons-material/History';
//import TimelineIcon from '@mui/icons-material/Timeline';
//import InfoIcon from '@mui/icons-material/Info';

import { Paper } from '@mui/material';

function Info() {

  return (
    <>
      <Paper 
        elevation={0} 
        square={true}
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          textAlign: "center",
          verticalAlign: "middle",
          backgroundColor: '#fff0ff' 
        }}
      > 
      <IconButton />
      <IconButton color="primary">
        <HelpOutlineIcon/>
      </IconButton>
      <IconButton color="primary">
        <SettingsIcon/>
      </IconButton>
      <IconButton color="primary">
        <IoIosStats/>
      </IconButton>
    </Paper>
  </>
  );
};

export default Info;