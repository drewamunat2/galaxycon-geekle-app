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
      gameStarted: false
    };
  }

  saveGameStarted = () => {
    window.localStorage.setItem("gameStarted", JSON.stringify(this.state.gameStarted));
  };

  saveOutOfTurns = () => {
    window.localStorage.setItem("outOfTurns", JSON.stringify(this.state.outOfTurns));
  };

  saveColors = () => {
    window.localStorage.setItem("colors", JSON.stringify(this.state.colors));
  };

  saveCharacters = () => {
    window.localStorage.setItem("characters", JSON.stringify(this.state.characters));
  };

  saveTurn = () => {
    window.localStorage.setItem("turn", JSON.stringify(this.state.turn));
  };

  saveIsCorrect = () => {
    window.localStorage.setItem("isCorrect", JSON.stringify(this.state.isCorrect));
  };

  saveTotalWins = () => {
    let totalWinsObj = JSON.parse(window.localStorage.getItem("totalGamesWon"));
    let totalGamesWon = 1;
    if(totalWinsObj) {
      totalGamesWon = totalWinsObj.totalGamesWon + 1;
    } 
    window.localStorage.setItem("totalGamesWon", JSON.stringify({"totalGamesWon": totalGamesWon}));
  }

  saveTotalGamesPlayed = () => {
    let saveTotalGamesPlayedObj = JSON.parse(window.localStorage.getItem("totalGamesPlayed"));
    let totalGamesPlayed = 1;
    if(saveTotalGamesPlayedObj) {
      totalGamesPlayed = saveTotalGamesPlayedObj.totalGamesPlayed + 1;
    } 
    window.localStorage.setItem("totalGamesPlayed", JSON.stringify({"totalGamesPlayed": totalGamesPlayed}));
  }

  //set a random character as the solution
  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:3001/characters`);
    //const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
    const randomCharacter = response.data[0];
    this.setState(() => ({ 
      solution: randomCharacter
    }));
    if(JSON.parse(window.localStorage.getItem("characters"))) {
      this.setState({ 
        characters: JSON.parse(window.localStorage.getItem("characters"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("colors"))) {
      this.setState({ 
        colors: JSON.parse(window.localStorage.getItem("colors"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("turn"))) {
      this.setState({ 
        turn: JSON.parse(window.localStorage.getItem("turn"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("isCorrect"))) {
      this.setState({ 
        isCorrect: JSON.parse(window.localStorage.getItem("isCorrect"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("outOfTurns"))) {
      this.setState({ 
        outOfTurns: JSON.parse(window.localStorage.getItem("outOfTurns"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("gameStarted"))) {
      this.setState({ 
        gameStarted: JSON.parse(window.localStorage.getItem("gameStarted"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("totalGamesPlayed"))) {
      this.setState({ 
        totalGamesPlayed: JSON.parse(window.localStorage.getItem("totalGamesPlayed"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("totalGamesWon"))) {
      this.setState({ 
        totalGamesWon: JSON.parse(window.localStorage.getItem("totalGamesWon"))
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.characters !== this.state.characters) {
      // ... do something
      this.saveCharacters();
    }
    if (prevState.colors !== this.state.colors) {
      // ... do something
      this.saveColors();
    }
    if (prevState.turn !== this.state.turn) {
      // ... do something
      this.saveTurn();
    }
    if (prevState.isCorrect !== this.state.isCorrect) {
      // ... do something
      this.saveIsCorrect();
    }
    if (prevState.outOfTurns !== this.state.outOfTurns) {
      // ... do something
      this.saveOutOfTurns();
    }
    if (prevState.gameStarted !== this.state.gameStarted) {
      // ... do something
      this.saveGameStarted();
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
    }), this.saveTotalWins());
  };

  //lose state
  updateOutOfTurns = (data) => {
    this.setState(() => ({ 
      outOfTurns: data
    }));
  };

  //game started state
  updateGameStarted = (data) => {
    if(!this.state.gameStarted){
    this.setState(() => ({ 
      gameStarted: data
    }), this.saveTotalGamesPlayed());
  }
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
