import React, { Component } from "react";
import Title from "./components/Title";
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
      colors: []
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

  /*updateGuesses = (data) => {
    this.setState((old) => 
      ({...old, ...data }));
      console.log(data);
      console.log(this.state.characters);
  };*/

  updateCharacters = (data) => {
    this.setState( prevState => ({ 
      characters: [...prevState.characters, data]
    }));
    console.log(data);
  };

  updateColors = (data) => {
    this.setState( prevState => ({ 
      colors: [...prevState.colors, data]
    }));
    console.log(data);
  };
  
  render() {
    return (
      <>
        <Title />
        <Search 
          updateCharacters={this.updateCharacters}
          updateColors={this.updateColors}
          solution={this.state.solution} 
        />
        <Categories />
        <Characters 
          characters={this.state.characters}
          colors={this.state.colors}
        />
      </>
    );
  }
}

export default App;
