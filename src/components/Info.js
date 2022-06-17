import IconButton from '@mui/material/IconButton';
//import logo from '../assets/GalaxyconlogoSmall.jpeg'
//import HistoryIcon from '@mui/icons-material/History';
//import TimelineIcon from '@mui/icons-material/Timeline';
//import InfoIcon from '@mui/icons-material/Info';

import { Paper } from '@mui/material';
import Settings from './Settings';
import Help from './Help';
import Stats from './Stats';

function Info(props) {

  const { solution, noTurn, isCorrect, colors } = props;

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
      <Help />
      <Settings />
      <Stats 
        solution={solution}
        isCorrect={isCorrect}
        noTurn={noTurn}
        colors={colors}
      />
    </Paper>
  </>
  );
};

export default Info;