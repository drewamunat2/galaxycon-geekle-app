import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search";
import Game from "./components/Game";
import Categories from "./components/Categories"
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      solution: {},
      colors: [],
      turn: 0,
      isCorrect: false,
      outOfTurns: false,
      gameStarted: false,
      totalGamesPlayed: 0,
      totalGamesWon: 0
    };
  }

  saveCharacters = () => {
    window.localStorage.setItem("characters", JSON.stringify(this.state.characters));
  };

  saveTotalWins = () => {
    let totalWinsObj = JSON.parse(window.localStorage.getItem("totalGamesWon"));
    console.log(totalWinsObj);
    let totalGamesWon = 1;
    if(totalWinsObj) {
      totalGamesWon = totalWinsObj.totalGamesWon + 1;
    } 
    window.localStorage.setItem("totalGamesWon", JSON.stringify({"totalGamesWon": totalGamesWon}));
    this.setState(() => ({ 
      totalGamesWon: totalGamesWon,
    }));
  }

  saveTotalGamesPlayed = () => {
    let saveTotalGamesPlayedObj = JSON.parse(window.localStorage.getItem("totalGamesPlayed"));
    let totalGamesPlayed = 1;
    if(saveTotalGamesPlayedObj) {
      totalGamesPlayed = saveTotalGamesPlayedObj.totalGamesPlayed + 1;
    } 
    window.localStorage.setItem("totalGamesPlayed", JSON.stringify({"totalGamesPlayed": totalGamesPlayed}));
    this.setState(() => ({ 
      totalGamesPlayed: totalGamesPlayed,
    }));
  }

  //set a random character as the solution
  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:3001/characters`);
    const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(randomCharacter);
    this.setState(() => ({ 
      solution: randomCharacter,
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.characters !== this.state.characters) {
      // ... do something
      this.saveCharacters();
    }
    if (prevState.isCorrect !== this.state.isCorrect) {
      // ... do something
      this.saveTotalWins();
    }
    if (prevState.gameStarted !== this.state.gameStarted) {
      // ... do something
      this.saveTotalGamesPlayed();
    }
  }

  //update UI with new character guess data
  updateCharacters = (data) => {
    this.setState( prevState => ({ 
      characters: [...prevState.characters, data]
    }));
  };

  //update UI with new character guess colors
  updateColors = (name, data) => {
    this.setState( (prevState) => ({ 
      colors: [...prevState.colors, {key: name, colors: data}]
    }));
  };

  //turn count
  updateTurn = () => {
    this.setState((prevState) => ({ 
      turn: prevState.turn + 1
    }));
  };

  //win state
  updateIsCorrect = (data) => {
    this.setState(() => ({ 
      isCorrect: data
    }));
  };

  //lose state
  updateOutOfTurns = (data) => {
    this.setState(() => ({ 
      outOfTurns: data
    }));
  };

  //game started state
  updateGameStarted = (data) => {
    this.setState(() => ({ 
      gameStarted: data
    }));
  };
  
  render() {
    return (
      <>
        <Header 
          solution={this.state.solution}
          noTurn={this.state.outOfTurns}
          isCorrect={this.state.isCorrect}
          colors={this.state.colors}
          totalGamesPlayed={this.state.totalGamesPlayed}
          totalGamesWon={this.state.totalGamesWon}
        />
        <Title
          turn={this.state.turn}
        />
        <Search 
          updateCharacters={this.updateCharacters}
          updateColors={this.updateColors}
          solution={this.state.solution}
          updateIsCorrect={this.updateIsCorrect} 
          updateTurn={this.updateTurn}
          updateOutOfTurns={this.updateOutOfTurns}
          turn={this.state.turn}
          noTurn={this.state.outOfTurns}
          isCorrect={this.state.isCorrect}
          updateGameStarted={this.updateGameStarted}
        />
        <Categories 
          turn={this.state.turn}
        />
        <Game 
          characters={this.state.characters}
          colors={this.state.colors}
          solution={this.state.solution}
        />
      </>
    );
  }
}

export default App;
