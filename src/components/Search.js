import React, { Component } from "react";
import { Container, } from "@mui/system";
import PropTypes from "prop-types";
import axios from "axios";
import Select from 'react-select'

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#ffeeff",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#00d5ff" : "blue",
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor:  "#00d5ff"
    }
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  })
};

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
      "name": "#78586F27",
      "gender": "#fff0ff",
      "show": "#fff0ff",
      "genre": "#fff0ff",
      "platform": "#fff0ff",
      "role": "#fff0ff",
      "year": "#fff0ff",
    };

    if (guess.name === this.props.solution.name) {
      colorObj.name = "#BDD358";
      this.props.updateIsCorrect(true);
    }

    //set gender color

    //same gender : set green
    if(guess.characteristics.gender === this.props.solution.characteristics.gender) {
      colorObj.gender = "#BDD358";
    } else if(guess.characteristics.species === this.props.solution.characteristics.species) {
      colorObj.gender = "#E5E059";
    }

    //set show color

    //same show : set green
    if(guess.characteristics.show === this.props.solution.characteristics.show) {
      colorObj.show = "#BDD358";
    } else if (this.isYellow(guess.characteristics.show, this.props.solution.characteristics.allShows)) {
      colorObj.show = "#E5E059";
    }

    //set genre color

    //same genre : set green
    if(guess.characteristics.genre === this.props.solution.characteristics.genre) {
      colorObj.genre = "#BDD358";
    } else if (this.isYellow(guess.characteristics.genre, this.props.solution.characteristics.allGenres)) {
      colorObj.genre = "#E5E059";
    }

    //set platform color

    //same platform : set green
    if(guess.characteristics.platform === this.props.solution.characteristics.platform) {
      colorObj.platform = "#BDD358";
    } else if(this.isYellow(guess.characteristics.platform, this.props.solution.characteristics.allPlatforms)) {
      colorObj.platform = "#E5E059";
    }

    //set role color

    //same role : set green
    if(guess.characteristics.role === this.props.solution.characteristics.role) {
      colorObj.role = "#BDD358";
    } else if(guess.characteristics.genRole === this.props.solution.characteristics.genRole) {
      colorObj.role = "#E5E059";
    }

    //set year color

    //same year : set green
    if(guess.characteristics.year === this.props.solution.characteristics.year) {
      colorObj.year = "#BDD358";
    } else if(guess.characteristics.decade === this.props.solution.characteristics.decade) {
      colorObj.year = "#E5E059";
    }

    this.props.updateColors(guess.name, colorObj);
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
      this.setState({allCharactersNames: nameArray});
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
              styles={customStyles}
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