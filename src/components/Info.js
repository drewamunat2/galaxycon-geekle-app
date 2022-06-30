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

  const {mode, solution, noTurn, turn, isCorrect, colors, timer, totalGamesWon, totalGamesPlayed } = props;

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
        totalGamesPlayed={totalGamesPlayed}
        totalGamesWon={totalGamesWon}
        timer={timer}
        turn={turn}
        mode={mode}
      />
    </Paper>
  </>
  );
};

export default Info;