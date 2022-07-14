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
    };
  }

  saveAddState = () => {
    window.localStorage.setItem("addState", JSON.stringify(this.state.addState));
    console.log("saved add to localStorage");
  };

  saveEditState = () => {
    window.localStorage.setItem("editState", JSON.stringify(this.state.editState));
    console.log("saved edit to localStorage");
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevState.addState !== this.state.addState) {
      console.log("did update addState");
      this.saveAddState();
    }
    if(prevState.editState !== this.state.editState) {
      console.log("did update editState");
      this.saveEditState();
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
  }

  updateAddState = (newState) => {
    this.setState({ 
      addState: newState
    });
    console.log("state add updated");
  }

  updateEditState = (newState) => {
    this.setState({ 
      editState: newState
    });
    console.log("state edit updated");
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
          />
        </>
      );
    }
  }
}

export default App;