import React, { Component } from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import Characters from "./components/Characters";
import Categories from "./components/Categories"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: "Superman",
          characteristics: 
          {
            "gender": "male", "species": "Kryptonian",
            "show": "Superman", "allShows": ["Superman", "Shazam!", "Superman II", "Superman III", "Superman IV", "Superman Returns"],
            "genre": "superhero", "allGenres": ["superhero", "action", "adventure", "action-adventure", "sci-fi", "children's film", "drama"],
            "platform": "movies", "allPlatforms": ["movies", "tv", "video games"],
            "role": "main protagonist/title character", "genRole": "good",
            "year": 1933, "decade": 1930,
            "id": 1
          }
        },
        {
          name: "Batman",
          characteristics: 
          {
            "gender": "male", "species": "Human",
            "show": "Batman", "allShows": ["Batman"],
            "genre": "superhero", "allGenres": ["superhero"],
            "platform": "movies", "allPlatforms": ["movies", "tv", "video games"],
            "role": "main protagonist/title character", "genRole": "good",
            "year": 1939, "decade": 1930,
            "id": 2
          }
        }
      ],
    };
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
    console.log(data);
    console.log(this.state.characters);
  };

  render() {
    return (
      <>
        <Title />
        <Search updateUI={this.updateGuesses} />
        <Categories />
        <Characters characters={this.state.characters} />
      </>
    );
  }
}

export default App;
