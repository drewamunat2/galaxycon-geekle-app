import { Component } from "react";
import { Grid, Typography } from '@mui/material';

class PercentagesEasy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gamesWonObj: JSON.parse(window.localStorage.getItem("totalGamesWon")),
      gamesPlayedObj: JSON.parse(window.localStorage.getItem("totalGamesPlayed")),
      winPercentage: 0,
      gamesPlayed: 0
    }
  }

  componentDidMount = () => {
    if(this.state.gamesWonObj){
      this.setState( {
        winPercentage: Math.floor(this.state.gamesWonObj.totalGamesWon / this.state.gamesPlayedObj.totalGamesPlayed * 100),
        gamesPlayed: this.state.gamesPlayedObj.totalGamesPlayed
      });
    }
  }

  render() {
    return(
      <>
        <Grid container justifyContent="center" alignItems="center">
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs>
                <Typography variant="h6">
                  {this.state.gamesPlayed}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="h6">
                  {this.state.winPercentage}
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

}

export default PercentagesEasy