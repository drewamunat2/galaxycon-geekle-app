import React, { Component } from "react";
//import axios from "axios";
import { Box, Button } from "@mui/material";
import EditAPI from "./components/EditAPI";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      authenticate: false,
      addState: {},
      editState: {},
      numCharacters: 0,
    };
  }

  saveAddState = () => {
    window.localStorage.setItem("addState", JSON.stringify(this.state.addState));
  };

  saveEditState = () => {
    window.localStorage.setItem("editState", JSON.stringify(this.state.editState));
  };

  saveNumCharacters = () => {
    window.localStorage.setItem("numCharacters", JSON.stringify(this.state.numCharacters));
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevState.addState !== this.state.addState) {
      this.saveAddState();
    }
    if(prevState.editState !== this.state.editState) {
      this.saveEditState();
    }
    if(prevState.numCharacters !== this.state.numCharacters) {
      this.saveNumCharacters();
    }
  }

  componentDidMount() {
    this.setState({authenticate: true});
    if(JSON.parse(window.localStorage.getItem("addState"))) {
      this.setState({ 
        addState: JSON.parse(window.localStorage.getItem("addState"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("editState"))) {
      this.setState({ 
        editState: JSON.parse(window.localStorage.getItem("editState"))
      });
    }
    if(JSON.parse(window.localStorage.getItem("numCharacters"))) {
      this.setState({ 
        numCharacters: JSON.parse(window.localStorage.getItem("numCharacters"))
      });
    }
  }

  updateAddState = (newState) => {
    this.setState({ 
      addState: newState
    });
  }

  updateEditState = (newState) => {
    this.setState({ 
      editState: newState
    });
  }

  updateNumCharacters = (newState) => {
    this.setState({ 
      numCharacters: newState
    });
  }
  
  render() {
    if(!this.state.authenticate){
      return (
        <>
          <Box sx={{ minWidth: '315' }}>
            Geekle Character API admin access
          </Box>
          <Box>
            <Button variant="contained" onClick={() => this.setState({authenticate: true})}>
              Log In
            </Button>
          </Box>
        </>
      );
    } else {
      return (
        <>
          <Box sx={{ minWidth: '315' }}>
            ACCESS GRANTED
          </Box>
          <Box>
            <Button variant="contained" onClick={() => this.setState({authenticate: false})}>
              Log Out
            </Button>
          </Box>
          <EditAPI 
            updateAddState={this.updateAddState}
            addState={this.state.addState}
            updateEditState={this.updateEditState}
            editState={this.state.editState}
            numCharacters={this.state.numCharacters}
            updateNumCharacters={this.updateNumCharacters}
          />
        </>
      );
    }
  }
}

export default App;