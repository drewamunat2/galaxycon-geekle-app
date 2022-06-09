import React, { Component } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Turn from "./components/Turn";
import Search from "./components/Search";
import Characters from "./components/Characters";
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
      isCorrect: false
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
    console.log(data);
  };

  //update UI with new character guess colors
  updateColors = (name, data) => {
    this.setState( (prevState) => ({ 
      colors: [...prevState.colors, {key: name, colors: data}]
    }));
    console.log(name, data);
    console.log(this.state.colors);
  };

  updateTurn = data => {
    this.setState(() => ({ 
      turn: data
    }));
  };

  updateIsCorrect = data => {
    this.setState(() => ({ 
      isCorrect: data
    }));
  };
  
  render() {
    return (
      <>
        <Header />
        <Title />
        <Turn 
          turn={this.state.characters.length}
          updateTurn={this.updateTurn}
        />
        <Search 
          updateCharacters={this.updateCharacters}
          updateColors={this.updateColors}
          solution={this.state.solution}
          updateIsCorrect={this.updateIsCorrect} 
        />
        <Categories />
        <Characters 
          characters={this.state.characters}
          colors={this.state.colors}
          solution={this.state.solution}
        />
      </>
    );
  }
}

export default App;
