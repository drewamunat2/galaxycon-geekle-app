import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Characters from "./components/Characters";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charcters: [
        {
          name: "Superman",
          characteristics: [
            {
              "gender": "male", "species": "Human",
              "gender": "male", "species": "Kryptonian",
              "show": "Superman", "allShows": ["Superman", "Shazam!", "Superman II", "Superman III", "Superman IV", "Superman Returns"],
              "genre": "superhero", "allGenres": ["superhero", "action", "adventure", "action-adventure", "sci-fi", "children's film", "drama"],
              "platform": "movies", "allPlatforms": ["movies", "tv", "video games"],
              "role": "main protagonist/title character", "genRole": "good",
              "year": 1933, "decade": 1930,
              "id": 1
            }
          ]
        },
        {
          name: "Batman",
          characteristics: [
            {
              "gender": "male", "species": "Human",
              "show": "Batman", "allShows": ["Batman"],
              "genre": "superhero", "allGenres": ["superhero"],
              "platform": "movies", "allPlatforms": ["movies", "tv", "video games"],
              "role": "main protagonist/title character", "genRole": "good",
              "year": 1939, "decade": 1930,
              "id": 2
            }
          ]
        }
      ],
    };
  }

  updateGuesses = (data) => {
    this.setState(...{ ...data });
  };

  render() {
    return (
      <>
        <Header />
        <Search updateUI={this.updateGuesses} />
        <Characters characters={this.state.characters} />
        <Footer />
      </>
    );
  }
}

export default App;
