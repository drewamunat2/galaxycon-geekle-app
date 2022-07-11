import React, { Component } from "react";
//import axios from "axios";
import { Box, Button } from "@mui/material";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      authenticate: false
    };
  }
  
  render() {
    return (
      <>
        <Box sx={{ minWidth: '315' }}>
          Geekle Character API admin access
        </Box>
        <Box>
          <Button variant="contained">
            Log In
          </Button>
        </Box>
      </>
    );
  }
}

export default App;