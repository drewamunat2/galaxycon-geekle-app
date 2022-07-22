import * as React from 'react';
import {Box, CircularProgress, Grid} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function CharacterDataGrid(props) {
  //players will not be able to see the ID of characters and only 
  //crucial characteristics are shown at mounting of component
  const { columns, initialState } = props;  

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
        let buildChacter = {name: '', gender: '', species: '', role: '', genRole: '', appearsIn: '', bothAppearsIn: '', genre: '', allGenres: '', platform: '', allPlatforms: '', owner: '', trademarkOwner: '', network: '', universe: '', shop: '', title: '', year: 0, decade: 0, id: 0};
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
      buildRows.sort((a, b) => (a.id - b.id));
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
        initialState={initialState}
        sx={{
          '& .MuiDataGrid-cell': {
            align: "center",
            overflow: "scroll"
          },
          bgcolor: '#ffdff050'
        }}
      /> : <Grid container alignItems="center" justifyContent='center' sx={{mt: 15, width: '100%'}}><CircularProgress /></Grid>}
    </Box>
  );
}