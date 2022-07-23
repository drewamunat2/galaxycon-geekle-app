import React, { Component } from "react";
import { Typography, Grid, Input, Button, Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import axios from "axios";

const client = axios.create({
  baseURL: "https://geekle-galaxycon.herokuapp.com/api/characters" 
});


const style = {
  minWidth: 900,
  maxHeight: 500,
  bgcolor: '#00000040',
  width: '70%', mx:'15%',
  overflowX: 'auto', WebkitTextSizeAdjust: 'none',
  pt: 3,
  mb: 18
};

const headerStyle = {
  minWidth: 900,
  pb: 1,
  bgcolor: '#00000050',
  width: '70%', mx:'15%',
  p: 1
}

class DeleteCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      input: '',
      names: [],
      character: {}
    };
  }

  resetState = () => {
    this.setState({
      name: '',
      input: '',
      character: {}
    });
  }

  handleSubmit = () => {
    const formData = this.state;
    if(formData.name && formData.input && formData.name === formData.input) {
      if(formData.character){
        const id = formData.character._id;
        window.open(`mailto:${this.emailTo()}?subject=${this.emailSubject()}&body=${this.emailBody(formData.character)}`);
        this.submitForm(id);
      } else {
        alert('finding character. try again in a second');
      }
    } else {
      alert('Please insert correct name');
    }
  }

  emailBody = (character) => {
    delete character._id;
    delete character.__v;
    delete character.updatedAt;
    delete character.createdAt;
    return JSON.stringify(character);
  }

  emailSubject = () => {
    return 'DELETE: ' + this.state.name;
  }

  emailTo = () => {
    return 'drew@superconventions.com';
  }

  submitForm = (id) => {
    client.delete(id)
    .then(() => {
      alert('success. Hit clear and refresh to delete another character');
      this.resetState();
      this.props.updateNumCharacters(this.props.numCharacters - 1);
    })
  }

  handleOnChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  getNames = async () => {
    const { data } = await axios.get(`https://geekle-galaxycon.herokuapp.com/api/names`);
    this.setState({names: data.names});
    this.props.updateNumCharacters(data.names.length);
  };

  getCharacter = async (name) => {
    const { data } = await axios.get(`https://geekle-galaxycon.herokuapp.com/api/getCharacter?name=${name}`);
    this.setState({character: data.data[0]});
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
    this.getCharacter(event.target.value);
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevState !== this.state) {
      this.props.updateDeleteState(this.state);
    }
  }

  componentDidMount() {
    this.setState(this.props.deleteState);
    this.getNames();
  }

  render() {
    return (
      <>
      <Box sx={{
        overflowX: 'auto', WebkitTextSizeAdjust: 'none'
      }}>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={headerStyle}>
          <Typography id="help-modal" variant="h4" component="h4" sx={{textDecoration: 'underline'}}>
            Delete a Character
          </Typography>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={style}>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <FormControl variant="filled" sx={{mr: 2, p:.25, width: 200, mt:-1}}>
              <InputLabel id="name-select-label">Name</InputLabel>
              <Select
                labelId="name-select-label"
                id="name-select"
                value={this.state.name}
                onChange={this.handleNameChange}
                label="Name"
                sx={{
                  p:1,
                  bgcolor: '#eddee1'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.state.names.length > 0 && this.state.names.map(option => {
                  return (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>            
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Input name="input" autoComplete="off" placeholder="confirm character name to be deleted..." value={this.state.input} onChange={this.handleOnChange} sx={{width: 300, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Button variant="contained" sx={{m:1, width:200}} onClick={this.handleSubmit}>Delete</Button>
            <Button variant="contained" sx={{m:1, width:100, bgcolor: '#ff0000', '&:hover': {backgroundColor: '#ff0000'}}} onClick={this.resetState}>Clear</Button>
          </Grid>
        </Grid>
        </Box>
      </>
    );
  }
}

export default DeleteCharacter;