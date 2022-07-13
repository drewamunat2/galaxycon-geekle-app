import * as React from 'react';
import {Box, CircularProgress, Grid} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from "axios";

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
    headerAlign: 'center',
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
    width: 100,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'role',
    headerName: 'role',
    width: 150,
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
    headerAlign: 'center',
  },
  {
    field: 'appearsIn',
    headerName: 'main appearance',
    width: 200,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'bothAppearsIn',
    headerName: 'all appearances',
    width: 2500,
    editable: false,
    sortable: false,
    align: 'left',
    headerAlign: 'left',
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
    field: 'allGenres',
    headerName: 'full genre list',
    width: 850,
    editable: false,
    sortable: false,
    align: 'left',
    headerAlign: 'left',
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
    field: 'allPlatforms',
    headerName: 'full platform list',
    width: 250,
    editable: false,
    sortable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'owner',
    headerName: 'owner',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'trademarkOwner',
    headerName: 'trademark owner',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'network',
    headerName: 'network',
    width: 250,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'universe',
    headerName: 'universe',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
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
    headerAlign: 'center',
  },
  {
    field: 'title',
    headerName: 'shop name',
    width: 200,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'shop',
    headerName: 'shop link',
    width: 500,
    editable: false,
    align: 'left',
    headerAlign: 'left',
  },
];

export default function CharacterDataGrid() {
  const [rows, setRows] = useState([]);
  const [characters, setCharacters] = useState({});
  const [showData, setShowData] = useState(false);

  const getData = async () => {
    const { data } = await axios.get(`https://geekle-galaxycon.herokuapp.com/api/characters`);
    setCharacters(data.data);
  };

  const createRows = (rows) => {
    setRows(rows);
  }

  const arrayToString = (array) => {
    let string = '';
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      string += array[i].toString();
      string += ', ';
    }
    string += array[length - 1].toString();
    return string;
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    let buildRows = [];
    if(characters.length > 0) {
      for (let character of characters) {
        let buildChacter = {name: '', gender: '', species: '', role: '', genRole: '', appearsIn: '', bothAppearsIn: '', genre: '', allGenres: '', platform: '', allPlatforms: '', owner: '', trademarkOwner: '', network: '', universe: '', shop: '', title: '', year: 0, decade: 0, id:0};
        for (let characteristic in character) {
          if(characteristic !== '__v' && characteristic !== '_id' && characteristic !== 'image' && characteristic !== 'createdAt' && characteristic !== 'updatedAt' && characteristic !== 'num' && characteristic !== 'bothAppearsIn' && characteristic !== 'allGenres' && characteristic !== 'allPlatforms') {
            buildChacter[characteristic] = character[characteristic];
          }
        }
        buildChacter.id = character.num.toString();
        buildChacter.bothAppearsIn = arrayToString(character.bothAppearsIn);
        buildChacter.allGenres = arrayToString(character.allGenres);
        buildChacter.allPlatforms = arrayToString(character.allPlatforms);
        buildRows.push(buildChacter);
      }
      createRows(buildRows);
      setShowData(true);
    }
  }, [characters]);

  return (
    <Box alignItems="center" justifyContent='center' sx={{ height: 600, width: '100%' }}>
      {showData ? <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        hideFooter
        sx={{
          '& .MuiDataGrid-cell': {
            align: "center",
            overflow: "scroll"
          }
        }}
        getRowClassName='cell--textCenter'
      /> : <Grid container alignItems="center" justifyContent='center' sx={{mt: 15, width: '100%'}}><CircularProgress /></Grid>}
    </Box>
  );
}