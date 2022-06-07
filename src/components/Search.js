import React, { Component } from "react";
import { Container, } from "@mui/system";
import PropTypes from "prop-types";
import axios from "axios";

import DatalistInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';
import { ChargingStationSharp } from "@mui/icons-material";



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: {},
    };
  }

  changeCharacter = (char) => {
    console.log(char);
    this.setState({ currentGuess: char });
  };

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

  fetchCharacter = async (char) => {
    const characterAPI = 'http://localhost:3001/characters?name=';
    try {
      const response = await axios.get(`${characterAPI}${char}`);
      const data = response.data;
      console.log(data[0]);
      this.changeCharacter(data[0]);
      this.props.updateUI(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container className="is-max-widescreen">
        <div className="field has-addons">
          <div className="control is-expanded">
            <DatalistInput
              onSelect={(item) => this.fetchCharacter(item.value)}
              items={[
                { id: 'Superman', value: 'Superman' },
                { id: 'Batman', value: 'Batman' },
                { id: 'Darth Vader', value: 'Darth Vader' },
                { id: 'Bubbles', value: 'Bubbles' },
                { id: 'Harry Potter', value: 'Harry Potter' },
                { id: 'Captain Kirk', value: 'Captain Kirk' },
                { id: 'Zelda', value: 'Zelda' },
                { id: 'Skeletor', value: 'Skeletor' },
                { id: 'Mario', value: 'Mario' },
                { id: "Rick O'Connell", value: "Rick O'Connell" },
                { id: 'Gill-man', value: 'Gill-man' },
                { id: 'Frank N. Furter', value: 'Frank N. Furter' },
                { id: 'Deku', value: 'Deku' },
              ]}
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