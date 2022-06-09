import React, { Component } from "react";
import { Container, } from "@mui/system";
import PropTypes from "prop-types";
import axios from "axios";
import Select from 'react-select'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
      allCharactersNames: []
    };
  }

  isYellow = (guessedTrait, closeArray) => {
    for (let l of closeArray) {
      if (l === guessedTrait) {
        return true;
      }
    }
    return false;
  };

  assertColors = (guess) => {
    let colorObj = {
      "name": "wrong",
      "gender": "wrong",
      "show": "wrong",
      "genre": "wrong",
      "platform": "wrong",
      "role": "wrong",
      "year": "wrong",
    };

    if (guess.name === this.props.solution.name) {
      colorObj.name = 'name-correct';
    }

    //set gender color

    //same gender : set green
    if(guess.characteristics.gender === this.props.solution.characteristics.gender) {
      colorObj.gender = 'correct';
    } else if(guess.characteristics.species === this.props.solution.characteristics.species) {
      colorObj.gender = 'almost-correct';
    }

    //set show color

    //same show : set green
    if(guess.characteristics.show === this.props.solution.characteristics.show) {
      colorObj.show = 'correct';
    } else if (this.isYellow(guess.characteristics.show, this.props.solution.characteristics.allShows)) {
      colorObj.show = 'almost-correct';
    }

    //set genre color

    //same genre : set green
    if(guess.characteristics.genre === this.props.solution.characteristics.genre) {
      colorObj.genre = 'correct';
    } else if (this.isYellow(guess.characteristics.genre, this.props.solution.characteristics.allGenres)) {
      colorObj.genre = 'almost-correct';
    }

    //set platform color

    //same platform : set green
    if(guess.characteristics.platform === this.props.solution.characteristics.platform) {
      colorObj.platform = 'correct';
    } else if(this.isYellow(guess.characteristics.platform, this.props.solution.characteristics.allPlatforms)) {
      colorObj.platform = 'almost-correct';
    }

    //set role color

    //same role : set green
    if(guess.characteristics.role === this.props.solution.characteristics.role) {
      colorObj.role = 'correct';
    } else if(guess.characteristics.genRole === this.props.solution.characteristics.genRole) {
      colorObj.role = 'almost-correct';
    }

    //set year color

    //same year : set green
    if(guess.characteristics.year === this.props.solution.characteristics.year) {
      colorObj.year = 'correct';
    } else if(guess.characteristics.decade === this.props.solution.characteristics.decade) {
      colorObj.year = 'almost-correct';
    }

    this.props.updateColors(guess.name, colorObj);
  };

  addAllNames = (names) => {
    this.setState({ allCharactersNames: names });
  };

  fetchCharacter = async (guess) => {
    const characterAPI = 'http://localhost:3001/characters?name=';
    const char = guess;
    try {
      const response = await axios.get(`${characterAPI}${char}`);
      const data = response.data;
      this.props.updateCharacters(data[0]);
      this.assertColors(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    const charactersAPI = 'http://localhost:3001/characters';
    let nameArray = [];
    let nameObject = {
      id: '',
      value: ''
    };
    try {
      const response = await axios.get(`${charactersAPI}`);
      const data = response.data;
      data.forEach(n => {
        nameObject = {
          label: n.name,
          value: n.name
        };
        nameArray.push(nameObject);
      });
      this.addAllNames(nameArray);
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (selectedOption) => {
    this.fetchCharacter(selectedOption.label);
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    return (
      <Container className="is-max-widescreen">
        <div className="field has-addons">
          <div className="control is-expanded">
            <Select 
              placeholder={null}
              options={this.state.allCharactersNames}
              onChange={this.handleChange}
              autoFocus={true}
              closeMenuOnSelect={true}
              controlShouldRenderValue={false}
              openMenuOnClick={true}
              openMenuOnFocus={false}
              captureMenuScroll={true}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;

Search.propTypes = {
  updateCharacters: PropTypes.func.isRequired,
  updateColors: PropTypes.func.isRequired
};