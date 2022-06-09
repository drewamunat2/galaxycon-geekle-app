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
