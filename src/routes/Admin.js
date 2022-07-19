import React, { Component } from "react";
import EditAPI from "../components/EditAPI";
import {withIsAuthenticated} from 'react-auth-kit';
import { Navigate } from "react-router-dom";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      authenticate: false,
      addState: {},
      editState: {},
      numCharacters: 0,
      deleteState: {}
    };
  }

  saveAddState = () => {
    window.localStorage.setItem("addState", JSON.stringify(this.state.addState));
  };

  saveEditState = () => {
    window.localStorage.setItem("editState", JSON.stringify(this.state.editState));
  };

  saveDeleteState = () => {
    window.localStorage.setItem("deleteState", JSON.stringify(this.state.deleteState));
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
    if(prevState.deleteState !== this.state.deleteState) {
      this.saveDeleteState();
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
    if(JSON.parse(window.localStorage.getItem("deleteState"))) {
      this.setState({ 
        deleteState: JSON.parse(window.localStorage.getItem("deleteState"))
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

  updateDeleteState = (newState) => {
    this.setState({ 
      deleteState: newState
    });
  }

  updateNumCharacters = (newState) => {
    this.setState({ 
      numCharacters: newState
    });
  }
  
  render() {
    if(this.props.isAuthenticated()){
      return (
        <>
          <EditAPI 
            updateAddState={this.updateAddState}
            addState={this.state.addState}
            updateEditState={this.updateEditState}
            editState={this.state.editState}
            updateDeleteState={this.updateDeleteState}
            deleteState={this.state.deleteState}
            numCharacters={this.state.numCharacters}
            updateNumCharacters={this.updateNumCharacters}
          />
        </>
      );
    } else {
      return(
        <Navigate to="/login" replace={true} />
      )
    }
  }
}

export default withIsAuthenticated(Admin);