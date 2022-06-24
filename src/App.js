import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search";
import Game from "./components/Game";
//import axios from "axios";
import { Box } from "@mui/material";
import data from './data/db.json';
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
      totalGamesWon: 0,
      tomorrow: {},
      time: new Date()
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

  saveTotalGamesPlayed = () => {
    window.localStorage.setItem("totalGamesPlayed", JSON.stringify(this.state.totalGamesPlayed));
  };

  saveTotalGamesWon = () => {
    window.localStorage.setItem("totalGamesWon", JSON.stringify(this.state.totalGamesWon));
  };

  saveChangeTime = () => {
    window.localStorage.setItem("changeTime", JSON.stringify(this.state.tomorrow));
  }

  incrementTotalGamesPlayed = () => {
    this.setState((prevState) => ({ 
      totalGamesPlayed: prevState.totalGamesPlayed + 1
    }));
  };
  
  incrementTotalWins = () => {
    this.setState((prevState) => ({ 
      totalGamesWon: prevState.totalGamesWon + 1
    }));
  };

  //makeshift tomorrow strictly for testing purposes
  /*getTomorrow = () => {
    let tom = new Date();
    tom.setSeconds(tom.getSeconds() + 6);
    tom.setMilliseconds(0);
    return tom;
  }*/

  getTomorrow = () => {
    let tom = new Date();
    tom.setDate(tom.getDate() + 1);
    tom.setHours(0);
    tom.setMinutes(0);
    tom.setSeconds(0);
    tom.setMilliseconds(0);
    return tom;
  }

  setRightNow = () => {
    let now = new Date();
    now.setMilliseconds(0);
    this.setState(() => ({ 
      time: now
    }));
  }

  setSolution = () => {
    //const response = await axios.get(`http://192.168.1.18:3000/characters`);
    //const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
    const db = JSON.parse(JSON.stringify(data))
    console.log(db);
    let randomCharacter = db.characters[Math.floor(Math.random() * db.characters.length)];
    console.log("setting tomorrow's solution as: " + randomCharacter.name);
    return randomCharacter;
  }

  getTimeRemaining = () => {
    const total = this.state.tomorrow - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total, hours, minutes, seconds
    };
  }

  getTime = () => {
    let { total, hours, minutes, seconds } = this.getTimeRemaining();
    if(total >= 0){
      this.setState(() => ({
        timer: (hours > 9 ? hours : '0' + hours) + ':' +
        (minutes > 9 ? minutes : '0' + minutes) + ':'
        + (seconds > 9 ? seconds : '0' + seconds)
      }));
    }
  }

  //set a random character as the solution
  componentDidMount = async () => {
    //const response = await axios.get(`http://192.168.1.18:3000/characters`);
    //const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
    const db = JSON.parse(JSON.stringify(data))
    const randomCharacter = db.characters[Math.floor(Math.random() * db.characters.length)];
    this.setState(() => ({ 
      solution: randomCharacter,
      tomorrow: this.getTomorrow()
    }));
    const interval = setInterval(() => {
      this.getTime();
      this.setRightNow();
    }, 1000);
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
    return () => clearInterval(interval);
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
    if (prevState.totalGamesPlayed !== this.state.totalGamesPlayed) {
      // ... do something
      this.saveTotalGamesPlayed();
    }
    if (prevState.totalGamesWon !== this.state.totalGamesWon) {
      // ... do something
      this.saveTotalGamesWon();
    }
    if(this.state.tomorrow !== prevState.tomorrow) {
      // ... do something
      //this.resetGame(true);
      this.saveChangeTime();
    }
    if(this.state.time !== prevState.time) {
      if(this.state.time.getTime() === this.state.tomorrow.getTime()) {
        console.log("reset!")
        this.setState({ 
          characters: [],
          solution: this.setSolution(),
          colors: [],
          turn: 0,
          isCorrect: false,
          outOfTurns: false,
          gameStarted: false,
          tomorrow: this.getTomorrow()
        });
        this.saveOutOfTurns();
        this.saveGameStarted();
        this.saveTotalGamesPlayed();
        this.saveTotalGamesWon();
        this.saveChangeTime();
        this.saveIsCorrect();
        this.saveTurn();
        this.saveColors();
        this.saveCharacters();
      }
    }
    /*if(this.state.time !== prevState.time) {
      console.log(this.state.time);
      if(this.state.time.getTime() === this.state.tomorrow.getTime()) {
        console.log("reset!")
        this.resetGame(true);
      }
    }*/
    //console.log(this.state);
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
    this.setState((prevState) => ({ 
      isCorrect: data,
      totalGamesWon: prevState.totalGamesWon + 1
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
    if(!this.state.gameStarted){
      this.setState((prevState) => ({ 
        gameStarted: data,
        totalGamesPlayed: prevState.totalGamesPlayed + 1
      }));
    }
  };

  resetGame = (isMidnight) => {
    if(isMidnight) {
      this.setState(() => ({ 
        characters: [],
        //solution: this.setSolution(),
        colors: [],
        turn: 0,
        isCorrect: false,
        outOfTurns: false,
        gameStarted: false,
        tomorrow: this.getTomorrow()
      }));
    }
  }
  
  render() {
    return (
      <Box sx={{ minWidth: '315' }}>
        <Header 
          solution={this.state.solution}
          noTurn={this.state.outOfTurns}
          isCorrect={this.state.isCorrect}
          colors={this.state.colors}
          totalGamesPlayed={this.state.totalGamesPlayed}
          totalGamesWon={this.state.totalGamesWon}
          timer={this.state.timer}
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
        <Game 
          characters={this.state.characters}
          colors={this.state.colors}
          solution={this.state.solution}
          turn={this.state.turn}
        />
      </Box>
    );
  }
}

export default App;
