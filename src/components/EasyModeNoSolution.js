import PercentagesEasy from './PercentagesEasy';
import { Grid, Typography, Button} from '@mui/material';

function EasyModeNoSolution(props) {

  const {totalGamesWon, totalGamesPlayed } = props;

  return (
    <Grid container>
      <Grid item xs></Grid>
      <Grid item xs={6}>
        <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
          EASY MODE
        </Typography>
          <PercentagesEasy
            totalGamesPlayed={totalGamesPlayed}
            totalGamesWon={totalGamesWon}
          />
        <Typography display='block' id="rules-of-the-game" variant="h6" color="#086788" sx={{textDecoration: 'underline'}}>
          Solution
        </Typography>
        <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
          ?
        </Typography>
        <Button sx={{ mb: 2, mt: 0 }} display='block' color="info" variant="contained" href='/'> 
          Play Now 
        </Button>
      </Grid>
      <Grid item xs></Grid>
    </Grid>
  );
}

export default EasyModeNoSolution;