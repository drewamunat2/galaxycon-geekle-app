import { Component } from "react";

class PercentagesEasy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gamesWonObj: JSON.parse(window.localStorage.getItem("totalGamesWon")),
      gamesPlayedObj: JSON.parse(window.localStorage.getItem("totalGamesPlayed")),
      winPercentage: 0
    }
  }

  componentDidMount = () => {
    if(this.state.gamesWonObj){
      this.setState( {
        winPercentage: this.state.gamesWonObj.totalGamesWon / this.state.gamesPlayedObj.totalGamesPlayed * 100
      });
    }
    console.log(this.state.winPercentage)
  }

  render() {
    return(
      <>
        {this.state.winPercentage + '%'}
      </>
    );
  }

}

export default PercentagesEasy