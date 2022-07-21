import React, { Component } from "react";
import { Grid, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import axios from "axios";
import Select from 'react-select'
import CharacterDataGridModal from "./CharacterDataGridModal";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#78586F90',
      dark: '#78586F',
    },
    secondary: {
      main: '#fff0ff',
    },
    success: {
      main: '#6CA663',
    },
    warning: {
      main: '#E0CA3C',
    },
    info: {
      main: '#086788'
    }
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor: '#fff0ff',
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover" :{
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover" :{
            backgroundColor: 'transparent'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        }
      }
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent'
        }
      }
    }
  },
});
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
    marginTop: 0
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

const customStylesMobileBig = {
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
    marginTop: 0
  }),
  menuList: base => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
    height: '175px'
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
      showInfo: '',
      openModal: false,
      showSearchBar: false
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
    guess.genre = genre;
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
    if(guess.gender === this.props.solution.gender) {
      colorObj.gender = "#6CA663";
      colorObj.genderColor = 'green';
    } else if(guess.species === this.props.solution.species) {
      colorObj.gender = "#E0CA3C";
      colorObj.genderColor = 'yellow';
    }

    //set show color
    let bothAppearsIn = this.isYellowArrays(guess.bothAppearsIn, this.props.solution.bothAppearsIn);
    //same show : set green
    if(guess.appearsIn === this.props.solution.appearsIn) {
      colorObj.appearsIn = "#6CA663";
      colorObj.appearsInColor = 'green';
    } else if (bothAppearsIn) {
      guess.appearsIn = bothAppearsIn;
      colorObj.appearsIn = "#E0CA3C";
      colorObj.appearsInColor = 'yellow';
    }

    //set genre color

    let bothGenres = this.isYellowArrays(guess.allGenres, this.props.solution.allGenres);

    //same genre : set green
    if(guess.genre === this.props.solution.genre) {
      colorObj.genre = "#6CA663";
      colorObj.genreColor = 'green';
    } else if (this.isYellow(this.props.solution.genre, guess.allGenres)) {
      guess = this.switchGenres(guess, this.props.solution.genre);
      colorObj.genre = "#6CA663";
      colorObj.genreColor = 'green';
    } else if (bothGenres) {
      guess.genre = bothGenres;
      colorObj.genre = "#E0CA3C";
      colorObj.genreColor = 'yellow';
    }

    //set platform color

    //same platform : set green
    if(guess.platform === this.props.solution.platform) {
      colorObj.platform = "#6CA663";
      colorObj.platformColor = 'green';
    } else if(guess.universe === this.props.solution.universe) {
      colorObj.platform = "#E0CA3C";
      colorObj.platformColor = 'yellow';
    }

    //set role color

    //same role : set green
    if(guess.role === this.props.solution.role) {
      colorObj.role = "#6CA663";
      colorObj.roleColor = 'green';
    } else if(guess.genRole === this.props.solution.genRole) {
      colorObj.role = "#E0CA3C";
      colorObj.roleColor = 'yellow';
    }

    //set year color

    //same year : set green
    if(guess.year === this.props.solution.year) {
      colorObj.year = "#6CA663";
      colorObj.yearColor = 'green';
    } else if(guess.decade === this.props.solution.decade) {
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

  fetchCharacter = async (guess) => {
    if(this.state.showInfo) {
      guess = guess.split('(')[0];
    }
    const characterAPI = 'https://geekle-galaxycon.herokuapp.com/api/getCharacter?name=';
    const char = guess;
    try {
      const response = await axios.get(`${characterAPI}${char}`);
      const data = response.data.data;
      this.assertColors(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    this.getCharacters();
  }

  getCharacters = async () => {
    let nameType = this.state.showInfo ? "selectName" : "name";
    let nameArray = [];
    let nameObject = {
      id: '',
      value: ''
    };
    try{
    const { data } = await axios.get(`https://geekle-galaxycon.herokuapp.com/api/${nameType}s`);
    for(let i = 0; i < data.names.length; i++) {
      nameObject = {
        label: data.names[i],
        value: data.names[i]
      };
      nameArray.push(nameObject);
    };
    this.setState({allCharactersNames: nameArray, showSearchBar: true});
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.showInfo !== this.state.showInfo){
      this.getCharacters();
    }
  }

  updateShowInfo = () => {
    this.setState({showInfo: true});
  }

  handleChange = (selectedOption) => {
    this.fetchCharacter(selectedOption.label);
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
          {this.state.showSearchBar ? <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ display: {xs:'none', sm:'flex'}}}
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
                captureMenuScroll={false}
                escapeClearsValue={true}
                menuShouldBlockScroll={true}
                cacheOptions={true}
                blurInputOnSelect={true}
                components={{
                  IndicatorSeparator: () => null
                }}
              />
            </Grid>
          </Grid> : <Grid container alignItems="center" justifyContent='center' sx={{mt: 15, width: '100%', display: {xs:'none', sm:'flex'}}}><CircularProgress /></Grid>}
          {this.state.showSearchBar ? <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ display: {xs:'flex', sm:'none'}}}
          >
            <Grid item xs={10} sm={8} md={7} lg={5} xl={3}>
              <Select 
                styles={customStylesMobileBig}
                placeholder={null}
                options={this.state.allCharactersNames}
                onChange={this.handleChange}
                autoFocus={false}
                closeMenuOnSelect={true}
                controlShouldRenderValue={false}
                openMenuOnClick={true}
                openMenuOnFocus={false}
                captureMenuScroll={false}
                escapeClearsValue={true}
                menuShouldBlockScroll={true}
                cacheOptions={true}
                blurInputOnSelect={true}
                components={{
                  IndicatorSeparator: () => null
                }}
              />
            </Grid>
          </Grid> : <Grid container alignItems="center" justifyContent='center' sx={{mt: 15, width: '100%', display: {xs:'flex', sm:'none'}}}><CircularProgress /></Grid>}
          <ThemeProvider theme={theme}>
            <CharacterDataGridModal
              updateMode={this.props.updateMode}
              mode={this.props.mode}
              updateShowInfo={this.updateShowInfo}
            />
          </ThemeProvider>
        </>
      );
    }
  }
}

export default Search;

Search.propTypes = {
  updateCharacters: PropTypes.func.isRequired,
  updateColors: PropTypes.func.isRequired,
  updateOutOfTurns: PropTypes.func.isRequired,
  updateMode: PropTypes.func.isRequired,
};