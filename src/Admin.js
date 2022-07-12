import React, { Component } from "react";
//import axios from "axios";
import { Box, Button } from "@mui/material";
import EditAPI from "./components/EditAPI";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      authenticate: false
    };
  }

  componentDidMount() {
    this.setState({authenticate: false});
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
          <EditAPI />
        </>
      );
    }
  }
}

export default App;