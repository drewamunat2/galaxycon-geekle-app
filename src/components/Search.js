import React, { Component } from "react";
import { Container, } from "@mui/system";
import PropTypes from "prop-types";
import axios from "axios";
import AsyncSelect from 'react-select/async';
import Async, { useAsync } from 'react-select/async';
import Select from 'react-select'

import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { ChargingStationSharp } from "@mui/icons-material";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
      allCharactersNames: []
    };
  }

  /*changeCharacter = (char) => {
    console.log(char);
    this.setState({ currentGuess: char });
  };*/

  addAllNames = (names) => {
    this.setState({ allCharactersNames: names });
  }

  /*fetchDefinitions = async (event) => {
    event.preventDefault();
    const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
    const wordToDefine = this.state.word;
    try {
      const response = await axios.get(`${dictionaryAPI}${wordToDefine}`);
      const data = response.data;
      console.log(data[0]);
      this.props.updateUI(data[0]);
    } catch (err) {
      console.log(err);
    }
  };*/

  fetchCharacter = async (guess) => {
    const characterAPI = 'http://localhost:3001/characters?name=';
    const char = guess;
    try {
      const response = await axios.get(`${characterAPI}${char}`);
      const data = response.data;
      this.props.updateUI(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  /*fetchCharacterFromState = async (event) => {
    event.preventDefault();
    const characterAPI = 'http://localhost:3001/characters?name=';
    const char = this.state.currentGuess;
    try {
      const response = await axios.get(`${characterAPI}${char}`);
      const data = response.data;
      console.log(data[0]);
      this.props.updateUI(data[0]);
    } catch (err) {
      console.log(err);
    }
  };*/

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

  /*getItems() {
    this.fetchAllCharacterNames();
    return this.state.allCharactersNames;
  }*/

  handleChange = (selectedOption) => {
    //this.setState({ currentGuess: selectedOption.label });
    this.fetchCharacter(selectedOption.label);
    console.log(`Option selected:`, selectedOption);
    console.log(this.state.currentGuess);
  }

  /*changeGuess = (event) => {
    this.setState({ currentGuess: event.target.value });
  };*/


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
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Search;

Search.propTypes = {
  updateUI: PropTypes.func.isRequired
};