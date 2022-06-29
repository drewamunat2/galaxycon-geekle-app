import { Grid, Typography } from '@mui/material';

function PercentagesEasy(props) {

  const {totalGamesWon, totalGamesPlayed} = props;

  const getPercentage = () => {
    if(totalGamesWon) {
      return totalGamesWon / totalGamesWon * 100;
    }
    return 0;
  }

  return(
    <>
      <Grid container>
          <Grid container>
            <Grid item xs>
              <Typography variant="h6">
                {totalGamesPlayed}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="h6">
                {getPercentage()}
              </Typography>
            </Grid>
          </Grid>
        <Grid container sx={{ mb: 2, mt: 0 }}>
          <Grid item xs>
            Played
          </Grid>
          <Grid item xs>
            Win%
          </Grid>
        </Grid>
      </Grid>
    </>
  );
  

}

export default PercentagesEasy