import { Paper, IconButton } from '@mui/material';

import Settings from './Settings';
import Help from './Help';
import Stats from './Stats';

function Info(props) {

  const {openHelp, mode, solution, noTurn, turn, isCorrect, colors, timer, totalGamesWon, totalGamesPlayed } = props;

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
      <Help 
        openHelp={openHelp}
      />
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