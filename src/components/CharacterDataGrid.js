import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from "axios";

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 20 
  },
  {
    field: 'name',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => 
      `${params.row.name || ''}`
  },
  {
    field: 'gender',
    headerName: 'gender',
    width: 100,
    editable: false,
  },
  {
    field: 'species',
    headerName: 'species',
    width: 150,
    editable: false,
  },
  {
    field: 'role',
    headerName: 'role',
    width: 150,
    editable: false,
  },
  {
    field: 'genRole',
    headerName: 'general role',
    width: 150,
    editable: false,
  },
  {
    field: 'appearsIn',
    headerName: 'main appearance',
    width: 150,
    editable: false,
  },
  {
    field: 'bothAppearsIn',
    headerName: 'all appearances',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'genre',
    headerName: 'main genre',
    width: 150,
    editable: false,
  },
  {
    field: 'allGenres',
    headerName: 'full genre list',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'platform',
    headerName: 'main platform',
    width: 150,
    editable: false,
  },
  {
    field: 'allPlatforms',
    headerName: 'full platform list',
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: 'owner',
    headerName: 'owner',
    width: 150,
    editable: false,
  },
  {
    field: 'trademarkOwner',
    headerName: 'trademark owner',
    width: 150,
    editable: false,
  },
  {
    field: 'network',
    headerName: 'network',
    width: 150,
    editable: false,
  },
  {
    field: 'universe',
    headerName: 'universe',
    width: 150,
    editable: false,
  },
  {
    field: 'year',
    headerName: 'year',
    width: 50,
    editable: false,
  },
  {
    field: 'decade',
    headerName: 'decade',
    width: 50,
    editable: false,
  },
  {
    field: 'title',
    headerName: 'shop name',
    width: 50,
    editable: false,
  },
  {
    field: 'shop',
    headerName: 'shop link',
    width: 300,
    editable: false,
  },
];

export default function CharacterDataGrid() {
  const [rows, setRows] = useState([]);
  const [characters, setCharacters] = useState({});

  const getData = async () => {
    const { data } = await axios.get(`https://geekle-galaxycon.herokuapp.com/api/characters`);
    setCharacters(data.data);
  };

  const createRows = (rows) => {
    setRows(rows);
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
          if(characteristic !== '__v' && characteristic !== '_id' && characteristic !== 'image' && characteristic !== 'createdAt' && characteristic !== 'updatedAt' && characteristic !== 'num') {
            buildChacter[characteristic] = character[characteristic];
          }
        }
        buildChacter.id = character.num.toString();
        buildRows.push(buildChacter);
      }
      createRows(buildRows);
    }
  }, [characters]);

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        hideFooter
        sx={{
          '& .MuiDataGrid-cell': {
            align: "center"
          }
        }}
        getRowClassName='cell--textCenter'
      />
    </Box>
  );
}