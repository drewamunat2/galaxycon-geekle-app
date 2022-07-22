import React, { Component } from "react";
import { Container, Paper, Typography } from "@mui/material";

import CharacterDataGrid from "./CharacterDataGrid";

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 20,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'name',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'gender',
    headerName: 'gender',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'species',
    headerName: 'species',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'role',
    headerName: 'role',
    width: 200,
    editable: false,	
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'genRole',
    headerName: 'general role',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'appearsIn',
    headerName: 'main appearance',
    width: 300,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'genre',
    headerName: 'main genre',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'platform',
    headerName: 'main platform',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'owner',
    headerName: 'owner',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'trademarkOwner',
    headerName: 'trademark owner',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'network',
    headerName: 'network',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'universe',
    headerName: 'universe',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'year',
    headerName: 'year',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'decade',
    headerName: 'decade',
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'allPlatforms',
    headerName: 'full platform list',
    width: 250,
    editable: false,
    sortable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'allGenres',
    headerName: 'full genre list',
    width: 950,
    editable: false,
    sortable: false,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'bothAppearsIn',
    headerName: 'all appearances',
    width: 2500,
    editable: false,
    sortable: false,
    align: 'left',
    headerAlign: 'left'
  },
  {
    field: 'title',
    headerName: 'shop name',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'shop',
    headerName: 'shop link',
    width: 500,
    editable: false,
    align: 'left',
    headerAlign: 'left'
  },
];

const initialState = {}

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
    return (
      <Container sx={{pb: 5}}>
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
        <CharacterDataGrid columns={columns} initialState={initialState}/>
      </Container>
    );
  }
}

export default CharacterList;