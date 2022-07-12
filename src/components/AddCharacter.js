import React, { Component } from "react";
import { Typography, Grid, Input, Button } from "@mui/material";


const style = {
  minWidth: 800,
  maxHeight: 500,
  bgcolor: '#00000040',
  width: '70%', mx:'15%',
  overflowX: 'auto', WebkitTextSizeAdjust: 'none',
  pt: 2
};

const headerStyle = {
  minWidth: 800,
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

  submitForm = () => {
    const formData = this.state;
    console.log(formData);
    //Now I have the all values wrapped in a object to send to server
  }

  handleOnChange = (e) => {
    console.log("handleOnChange")
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  render() {
    return (
      <>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={headerStyle}>
          <Typography id="help-modal" variant="h4" component="h4" sx={{textDecoration: 'underline'}}>
            Add a Character
          </Typography>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={style}>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}>name: </Typography> 
            <Input name="name" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>selectName: </Typography> 
            <Input name="selectName" onChange={this.handleOnChange} sx={{width: 400, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> shop: </Typography>
            <Input name="shop" onChange={this.handleOnChange} sx={{width: 700, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> title: </Typography>
            <Input name="title" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>image: </Typography> 
            <Input name="image" onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> gender: </Typography>
            <Input name="gender" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>species: </Typography> 
            <Input name="species" onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> appearsIn: </Typography>
            <Input name="appearsIn" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>bothAppearsIn: </Typography> 
            <Input name="bothAppearsIn" onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> genre: </Typography>
            <Input name="genre" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>allGenres: </Typography> 
            <Input name="allGenres" onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> platform: </Typography>
            <Input name="platform" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>allPlatforms: </Typography> 
            <Input name="allPlatforms" onChange={this.handleOnChange} sx={{width: 500, p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> owner: </Typography>
            <Input name="owner" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>trademarkOwner: </Typography> 
            <Input name="trademarkOwner" onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> network: </Typography>
            <Input name="network" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>universe: </Typography> 
            <Input name="universe" onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> role: </Typography>
            <Input name="role" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>genRole: </Typography> 
            <Input name="genRole" onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}> year: </Typography>
            <Input name="year" onChange={this.handleOnChange} sx={{mr: 2, p:.25}}/>
            <Typography sx={{mr: 1}}>decade: </Typography> 
            <Input name="decade" onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Typography sx={{mr: 1}}>num: </Typography> 
            <Input name="num" onChange={this.handleOnChange} sx={{p:.25}}/>
          </Grid>
          <Grid container justifyContent="center" alignItems="center" alignSelf='center' sx={{my:1}}>
            <Button variant="contained"sx={{my:1, width:200}} onClick={this.submitForm}>Submit</Button>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default AddCharacter;