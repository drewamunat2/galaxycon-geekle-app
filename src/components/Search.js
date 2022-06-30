import React, { Component } from "react";
import { Button, Grid } from "@mui/material";
import PropTypes from "prop-types";
//import axios from "axios";
import Select from 'react-select'
import data from '../data/db.json';

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#ffeeff",
    // match with the menu
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    // Overwrittes the different states of border
    borderColor: state.isFocused ? "#00d5ff" : state.isDisabled ? "#d3d3d3" : "blue",
    cursor: state.isDisabled ? 'not-allowed' : 'text',
    // Removes weird border around container
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      // Overwrittes the different states of border
      borderColor:  "#00d5ff",
    },
    height: "50px"
  }),
  menu: base => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0
  }),
  option: base => ({
    ...base,
    cursor: 'grab'
  })
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
      allCharactersNames: [],
      showInfo: ''
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

  switchGenres = (guess, genre) => {
    guess.characteristics.genre = genre;
    return guess;
  }

  isYellowArrays = (guessedArray, solutionArray) => {
    for (let l of solutionArray) {
      for (let m of guessedArray) {
        if (l === m) {
          return l;
        }
      }
    }
    return '';
  }

  assertColors = (guess) => {
    let colorObj = {
      "name": "#78586F40",
      "gender": "#78586F27",
      "appearsIn": "#78586F27",
      "genre": "#78586F27",
      "platform": "#78586F27",
      "role": "#78586F27",
      "year": "#78586F27",
      "nameColor": "grey",
      "genderColor": "grey",
      "appearsInColor": "grey",
      "genreColor": "grey",
      "platformColor": "grey",
      "roleColor": "grey",
      "yearColor": "grey",
    };
    
    let solutionName = this.props.solution.name;

    if (guess.name === solutionName) {
      colorObj.name = "#66a05d";
      colorObj.nameColor = 'green';
      this.props.updateIsCorrect(true);
    }

    //set gender color

    //same gender : set green
    if(guess.characteristics.gender === this.props.solution.characteristics.gender) {
      colorObj.gender = "#6CA663";
      colorObj.genderColor = 'green';
    } else if(guess.characteristics.species === this.props.solution.characteristics.species) {
      colorObj.gender = "#E0CA3C";
      colorObj.genderColor = 'yellow';
    }

    //set show color
    let bothAppearsIn = 0;
    //same show : set green
    if(guess.characteristics.appearsIn === this.props.solution.characteristics.appearsIn) {
      colorObj.appearsIn = "#6CA663";
      colorObj.appearsInColor = 'green';
    } else if (bothAppearsIn = this.isYellowArrays(guess.characteristics.bothAppearsIn, this.props.solution.characteristics.bothAppearsIn)) {
      guess.characteristics.appearsIn = bothAppearsIn;
      colorObj.appearsIn = "#E0CA3C";
      colorObj.appearsInColor = 'yellow';
    }

    //set genre color

    //same genre : set green
    if(guess.characteristics.genre === this.props.solution.characteristics.genre) {
      colorObj.genre = "#6CA663";
      colorObj.genreColor = 'green';
    } else if (this.isYellow(this.props.solution.characteristics.genre, guess.characteristics.allGenres)) {
      guess = this.switchGenres(guess, this.props.solution.characteristics.genre);
      colorObj.genre = "#6CA663";
      colorObj.genreColor = 'green';
    } else if (this.isYellow(guess.characteristics.genre, this.props.solution.characteristics.allGenres)) {
      colorObj.genre = "#E0CA3C";
      colorObj.genreColor = 'yellow';
    }

    //set platform color

    //same platform : set green
    if(guess.characteristics.platform === this.props.solution.characteristics.platform) {
      colorObj.platform = "#6CA663";
      colorObj.platformColor = 'green';
    } else if(this.isYellow(guess.characteristics.platform, this.props.solution.characteristics.allPlatforms)) {
      colorObj.platform = "#E0CA3C";
      colorObj.platformColor = 'yellow';
    }

    //set role color

    //same role : set green
    if(guess.characteristics.role === this.props.solution.characteristics.role) {
      colorObj.role = "#6CA663";
      colorObj.roleColor = 'green';
    } else if(guess.characteristics.genRole === this.props.solution.characteristics.genRole) {
      colorObj.role = "#E0CA3C";
      colorObj.roleColor = 'yellow';
    }

    //set year color

    //same year : set green
    if(guess.characteristics.year === this.props.solution.characteristics.year) {
      colorObj.year = "#6CA663";
      colorObj.yearColor = 'green';
    } else if(guess.characteristics.decade === this.props.solution.characteristics.decade) {
      colorObj.year = "#E0CA3C";
      colorObj.yearColor = 'yellow';
    }
    this.props.updateTurn();
    if (this.props.turn >= 7) {
      this.props.updateOutOfTurns(true);
    }
    this.props.updateColors(guess.name, colorObj);
    this.props.updateCharacters(guess);
    this.props.updateGameStarted(true);
  };

  fetchCharacter = /*async*/ (guess) => {
    /*const characterAPI = 'http://192.168.1.18:3000/characters?name=';
    const char = guess;
    try {
      const response = await axios.get(`${characterAPI}${char}`);
      const data = response.data;
      this.props.updateCharacters(data[0]);
      this.assertColors(data[0]);
    } catch (err) {
      console.log(err);
    }*/
    const db = JSON.parse(JSON.stringify(data))
    let nameType = this.state.showInfo ? "select-name" : "name"
    for(let i = 0; i < db.characters.length; i++) {
      let char = db.characters[i]
      if(char[nameType] === guess) {
        this.assertColors(char);
      }
    }
  };

  componentDidMount = async () => {
    /*const charactersAPI = 'http://192.168.1.18:3000/characters';
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
    }*/
    this.getCharacters();
  }

  getCharacters = () => {
    let nameType = this.state.showInfo ? "select-name" : "name";
    let nameArray = [];
    let nameObject = {
      id: '',
      value: ''
    };
    const db = JSON.parse(JSON.stringify(data));
    for(let i = 0; i < db.characters.length; i++) {
      nameObject = {
        label: db.characters[i][nameType],
        value: db.characters[i][nameType]
      };
      nameArray.push(nameObject);
    };
    this.setState({allCharactersNames: nameArray});
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.showInfo !== this.state.showInfo){
      this.getCharacters();
      this.props.updateMode()
    }
  }

  handleChange = (selectedOption) => {
    this.fetchCharacter(selectedOption.label);
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showInfo: !prevState.showInfo
    }));
  }

  showInfoState = () => {
    console.log(this.state.showInfo);
    if (this.state.showInfo) {
      return 'ON';
    }
    return 'OFF';
  }

  render() {
    if(this.props.noTurn || this.props.isCorrect) {
      return (
        <Grid
          container
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
            <Select 
              styles={customStyles}
              placeholder={null}
              isDisabled={true}
              controlShouldRenderValue={false}
              components={{
                IndicatorSeparator: () => null
              }}
            />
          </Grid>
        </Grid>
      );
    } else {
      return (
        <>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
              <Select 
                styles={customStyles}
                placeholder={null}
                options={this.state.allCharactersNames}
                onChange={this.handleChange}
                autoFocus={false}
                closeMenuOnSelect={true}
                controlShouldRenderValue={false}
                openMenuOnClick={true}
                openMenuOnFocus={false}
                captureMenuScroll={true}
                escapeClearsValue={true}
                menuShouldBlockScroll={true}
                cacheOptions={true}
                blurInputOnSelect={true}
                components={{
                  IndicatorSeparator: () => null
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
          >
            <Button 
              variant="contained" 
              sx={{my: 1, borderColor: "blue", color: '#FFF0FF', borderRadius: 5}}
              onClick={() => this.handleClick()}
            >
              📋 Character Info {this.showInfoState()}
            </Button>
          </Grid>
        </>
      );
    }
  }
}

export default Search;

Search.propTypes = {
  updateCharacters: PropTypes.func.isRequired,
  updateColors: PropTypes.func.isRequired,
  updateOutOfTurns: PropTypes.func.isRequired
};