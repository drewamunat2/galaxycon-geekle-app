import React, { Component } from "react";
import { Typography, Grid, Input, Button, Box } from "@mui/material";
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
  pt: 2
};

const headerStyle = {
  minWidth: 900,
  mt: 6,
  bgcolor: '#00000050',
  width: '70%', mx:'15%',
  p: 1
}

class AddCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      selectName: '',
      shop: '',
      title: '',
      image: '',
      gender: '',
      species: '',
      appearsIn: '',
      bothAppearsIn: '',
      genre: '',
      allGenres: '',
      platform: '',
      allPlatforms: '',
      owner: '',
      trademarkOwner: '',
      network: '',
      universe: '',
      role: '',
      genRole: '',
      year: '',
      decade: '',
      num: '',
    };
  }

  resetState = () => {
    this.setState({
      name: '',
      selectName: '',
      shop: '',
      title: '',
      image: '',
      gender: '',
      species: '',
      appearsIn: '',
      bothAppearsIn: '',
      genre: '',
      allGenres: '',
      platform: '',
      allPlatforms: '',
      owner: '',
      trademarkOwner: '',
      network: '',
      universe: '',
      role: '',
      genRole: '',
      year: '',
      decade: '',
      num: '',
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

  organizeForm = () => {
    const formData = this.state;
    const year = this.stringToInt(this.state.year);
    const decade = this.stringToInt(this.state.decade);
    const num = this.stringToInt(this.state.num);
    const bothAppearsIn = this.stringToArray(this.state.bothAppearsIn);
    const allGenres = this.stringToArray(this.state.allGenres);
    const allPlatforms = this.stringToArray(this.state.allPlatforms);
    formData.year = year;
    formData.decade = decade;
    formData.num = num;
    formData.bothAppearsIn = bothAppearsIn;
    formData.allGenres = allGenres;
    formData.allPlatforms = allPlatforms;
    console.log(formData);
    this.submitForm(formData);
  }

  submitForm = (formData) => {
    client.post('', formData)
    .then(function (response) {
      this.resetState();
    })
    .finally(function (response) {  
      alert(response);
    })
  }

  handleOnChange = (e) => {
    console.log("handleOnChange")
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  componentDidUpdate (prevProps, prevState) {
    console.log("state update")
    if(prevState !== this.state) {
      this.props.updateAddState(this.state);
    }
  }

  componentDidMount() {
    this.setState(this.props.addState);
  }

  render() {
    return (
      <>
      <Box sx={{
        overflowX: 'auto', WebkitTextSizeAdjust: 'none'
      }}>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={headerStyle}>
          <Typography id="help-modal" variant="h4" component="h4" sx={{textDecoration: 'underline'}}>
            Add a Character
          </Typography>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={style}>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}>name: </Typography> 
            <Input name="name" autoComplete="off" value={this.state.name} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>selectName: </Typography> 
            <Input name="selectName" autoComplete="off" value={this.state.selectName} onChange={this.handleOnChange} sx={{width: 400, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> shop: </Typography>
            <Input name="shop" autoComplete="off" value={this.state.shop} onChange={this.handleOnChange} sx={{width: 700, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> title: </Typography>
            <Input name="title" autoComplete="off" value={this.state.title} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>image: </Typography> 
            <Input name="image" autoComplete="off" value={this.state.image} onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> gender: </Typography>
            <Input name="gender" autoComplete="off" value={this.state.gender} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>species: </Typography> 
            <Input name="species" autoComplete="off" value={this.state.species} onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> appearsIn: </Typography>
            <Input name="appearsIn" autoComplete="off" value={this.state.appearsIn} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>bothAppearsIn: </Typography> 
            <Input name="bothAppearsIn" autoComplete="off" value={this.state.bothAppearsIn} onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> genre: </Typography>
            <Input name="genre" autoComplete="off" value={this.state.genre} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>allGenres: </Typography> 
            <Input name="allGenres" autoComplete="off" value={this.state.allGenres} onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> platform: </Typography>
            <Input name="platform" autoComplete="off" value={this.state.platform} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>allPlatforms: </Typography> 
            <Input name="allPlatforms" autoComplete="off" value={this.state.allPlatforms} onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> owner: </Typography>
            <Input name="owner" autoComplete="off" value={this.state.owner} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>trademarkOwner: </Typography> 
            <Input name="trademarkOwner" autoComplete="off" value={this.state.trademarkOwner} onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> network: </Typography>
            <Input name="network" autoComplete="off" value={this.state.network} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>universe: </Typography> 
            <Input name="universe" autoComplete="off" value={this.state.universe} onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> role: </Typography>
            <Input name="role" autoComplete="off" value={this.state.role} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>genRole: </Typography> 
            <Input name="genRole" autoComplete="off" value={this.state.genRole} onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> year: </Typography>
            <Input name="year" autoComplete="off" value={this.state.year} onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>decade: </Typography> 
            <Input name="decade" autoComplete="off" value={this.state.decade} onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}>num: </Typography> 
            <Input name="num" autoComplete="off" value={this.state.num} onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Button variant="contained" sx={{m:1, width:200}} onClick={this.organizeForm}>Submit</Button>
            <Button variant="contained" sx={{m:1, width:100, bgcolor: '#ff0000', '&:hover': {backgroundColor: '#ff0000'}}} onClick={this.resetState}>Clear</Button>
          </Grid>
        </Grid>
        </Box>
      </>
    );
  }
}

export default AddCharacter;