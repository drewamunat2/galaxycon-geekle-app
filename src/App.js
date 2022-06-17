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
      outOfTurns: false
    };
  }

  //set a random character as the solution
  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:3001/characters`);
    const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(randomCharacter);
    this.setState(() => ({ 
      solution: randomCharacter
    }));
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
  
  render() {
    return (
      <>
        <Header 
          solution={this.state.solution}
          noTurn={this.state.outOfTurns}
          isCorrect={this.state.isCorrect}
          colors={this.state.colors}
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
