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
      <Grid container justifyContent="center" alignItems="center">
          <Grid container justifyContent="center" alignItems="center">
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
        <Grid container justifyContent="center" alignItems="center" sx={{ mb: 2, mt: 0 }}>
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