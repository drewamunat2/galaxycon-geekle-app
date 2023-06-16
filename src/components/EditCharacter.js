import React, { Component } from "react";
import { Typography, Grid, Input, Button, Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import axios from "axios";

const client = axios.create({
  baseURL: "https://galaxycon-geekle-api.herokuapp.com/api/characters" 
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
  mt: 6,
  pb: 1,
  bgcolor: '#00000050',
  width: '70%', mx:'15%',
  p: 1
}

class EditCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      field: '',
      input: '',
      names: [],
      character: {}
    };
  }

  resetState = () => {
    this.setState({
      name: '',
      field: '',
      input: '',
      character: {}
    });
  }

  stringToArray = (string) => {
    let array = []
    if(string){
      array = string.split(", ");
    }
    return array;
  }

  stringToInt = (string) => {
    let integer = 0;
    if(string){
      integer = parseInt(string, 10);
    }
    return integer;
  }

  handleSubmit = () => {
    const formData = this.state;
    if(formData.name && formData.field && formData.input) {
      if(formData.character){
        const id = formData.character._id;
        delete formData.character._id;
        delete formData.character.__v;
        delete formData.character.updatedAt;
        delete formData.character.createdAt;
        const oldFieldValue = formData.character[formData.field]
        const formattedInput = this.formatInput(formData.field, formData.input);
        formData.character[formData.field] = formattedInput;
        this.submitForm(id, formData.character, oldFieldValue);
      } else {
        alert('finding character. try again in a second');
      }
    } else {
      alert('Please complete form');
    }
  }

  formatInput = (field, input) => {
    let newInput = input;
    if(field === 'year' || field === 'decade' || field === 'num') {
      newInput = this.stringToInt(input);
    }
    else if(field === 'bothAppearsIn' || field === 'allGenres' || field === 'allPlatforms') {
      newInput = this.stringToArray(input);
    }
    return newInput;
  }

  emailBody = (character) => {
    return JSON.stringify(character);
  }

  emailSubject = (oldFieldValue) => {
    return 'Edit: ' + this.state.name + ' field: ' + this.state.field + ' from: ' + oldFieldValue + ' to: ' + this.state.input;
  }

  emailTo = () => {
    return 'drew@superconventions.com';
  }
  

  submitForm = (id, character, oldFieldValue) => {
    const put = client.put(id, character, {headers: {Authorization: `Bearer ${this.props.token}`}})
    .then(() => {
      alert('success. Hit clear and refresh to edit another character');
      window.open(`mailto:${this.emailTo()}?subject=${this.emailSubject(oldFieldValue)}&body=${this.emailBody(character)}`);
      this.resetState();
    }).catch(err => { console.log(err) });
    console.log(put);
  }

  handleOnChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  getNames = async () => {
    const { data } = await axios.get(`https://galaxycon-geekle-api.herokuapp.com/api/names`);
    this.setState({names: data.names});
    this.props.updateNumCharacters(data.names.length);
  };

  getCharacter = async (name) => {
    const { data } = await axios.get(`https://galaxycon-geekle-api.herokuapp.com/api/getCharacter?name=${name}`);
    console.log(data.data[0])
    this.setState({character: data.data[0]});
  }

  handleFieldChange = (event) => {
    this.setState({field: event.target.value});
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
    this.getCharacter(event.target.value);
  };

  componentDidUpdate (prevProps, prevState) {
    if(prevState !== this.state) {
      this.props.updateEditState(this.state);
    }
  }

  componentDidMount() {
    this.setState(this.props.editState);
    this.getNames();
    console.log(this.props.token)
  }

  render() {
    return (
      <>
      <Box sx={{
        overflowX: 'auto', WebkitTextSizeAdjust: 'none'
      }}>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={headerStyle}>
          <Typography id="help-modal" variant="h4" component="h4" sx={{textDecoration: 'underline'}}>
            Edit a Character
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
            <FormControl variant="filled" sx={{mr: 2, p:.25, width: 200, mt:-1}}>
              <InputLabel id="field-select-label">Field</InputLabel>
              <Select
                labelId="field-select-label"
                id="field-select"
                value={this.state.field}
                onChange={this.handleFieldChange}
                label="Field"
                sx={{
                  p:1,
                  bgcolor: '#eddee1'
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="name">name</MenuItem>
                <MenuItem value="selectName">name for easy mode</MenuItem>
                <MenuItem value="shop">shop link</MenuItem>
                <MenuItem value="title">name of shop</MenuItem>
                <MenuItem value="image">shop image</MenuItem>
                <MenuItem value="gender">gender</MenuItem>
                <MenuItem value="species">species</MenuItem>
                <MenuItem value="appearsIn">main appearance</MenuItem>
                <MenuItem value="bothAppearsIn">every appearance</MenuItem>
                <MenuItem value="genre">genre</MenuItem>
                <MenuItem value="allGenres">allGenres</MenuItem>
                <MenuItem value="platform">platform</MenuItem>
                <MenuItem value="allPlatforms">all platforms</MenuItem>
                <MenuItem value="owner">owner</MenuItem>
                <MenuItem value="trademarkOwner">trademark owner</MenuItem>
                <MenuItem value="network">network</MenuItem>
                <MenuItem value="universe">universe</MenuItem>
                <MenuItem value="role">role</MenuItem>
                <MenuItem value="genRole">good or bad</MenuItem>
                <MenuItem value="year">year</MenuItem>
                <MenuItem value="decade">decade</MenuItem>
                <MenuItem value="num">id</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Input name="input" autoComplete="off" placeholder="input new characteristic..." value={this.state.input} onChange={this.handleOnChange} sx={{width: 600, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Button variant="contained" sx={{m:1, width:200}} onClick={this.handleSubmit}>Update</Button>
            <Button variant="contained" sx={{m:1, width:100, bgcolor: '#ff0000', '&:hover': {backgroundColor: '#ff0000'}}} onClick={this.resetState}>Clear</Button>
          </Grid>
        </Grid>
        </Box>
      </>
    );
  }
}

export default EditCharacter;