import React, { Component } from "react";
import { Container, Paper, Typography } from "@mui/material";
import {withIsAuthenticated} from 'react-auth-kit';
import { Navigate } from "react-router-dom";

import CharacterDataGrid from "../components/CharacterDataGrid";

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
    if(this.props.isAuthenticated()){
      return (
        <Container>
          Hello {this.props.authState.user} <button onClick={() => this.props.signOut()}>Sign Out</button>
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
    } else {
      return (
        <Navigate to="/login" replace={true} />
      )
    }
  }
}

export default withIsAuthenticated(CharacterList);