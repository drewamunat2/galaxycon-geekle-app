import React, { Component } from "react";
//import axios from "axios";
import { Container, Paper, Typography } from "@mui/material";

import CharacterDataGrid from "./components/CharacterDataGrid";

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      characters: {}
    };
  }

  saveAddState = () => {
    window.localStorage.setItem("characterList", JSON.stringify(this.state.query));
    console.log("saved to localStorage");
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevState.query !== this.state.query) {
      console.log("did update characterList");
      this.saveAddState();
    }
  }

  componentDidMount() {
    this.setState({authenticate: true});
    if(JSON.parse(window.localStorage.getItem("query"))) {
      this.setState({ 
        query: JSON.parse(window.localStorage.getItem("query"))
      });
    }
  }
  
  render() {
    return (
      <Container>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: '#fff0ff',
            mt: 3,
            mb: 3
          }}
        > 
          <Typography id="Geekle-Character-List" color="#086788" variant="h3" component="h2">
            Geekle Character List
          </Typography>
        </Paper>
        <CharacterDataGrid />
      </Container>
    );
  }
}

export default CharacterList;