import React, { Component, useState } from "react";
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
    };
  }

  //set a random character as the solution
  componentDidMount = async () => {
    const response = await axios.get(`http://localhost:3001/characters`);
    console.log(response)
    const randomCharacter = response.data[Math.floor(Math.random() * response.data.length)];
    console.log(randomCharacter);
    this.setState((randomCharacter) => ({ 
      solution: randomCharacter
    }));
  }

  /*updateGuesses = (data) => {
    this.setState((old) => 
      ({...old, ...data }));
      console.log(data);
      console.log(this.state.characters);
  };*/

  updateGuesses = (data) => {
    this.setState( prevState => ({ 
      characters: [...prevState.characters, data]
    }));
  };

  render() {
    return (
      <>
        <Title />
        <Search 
          updateUI={this.updateGuesses} 
        />
        <Categories />
        <Characters 
          characters={this.state.characters}
          solution={this.state.solution} 
        />
      </>
    );
  }
}

export default App;
