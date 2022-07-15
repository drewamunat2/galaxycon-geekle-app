import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AddCharacter from "./AddCharacter";
import EditCharacter from "./EditCharacter";
import DeleteCharacter from "./DeleteCharacter";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#eddee1'
        }
      }
    }
  }
});

function EditAPI(props) {

  const { updateAddState, addState, editState, updateEditState, deleteState, updateDeleteState, numCharacters, updateNumCharacters } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box 
        justifyContent="center"
        alignItems="center"
      > 
        <Grid container justifyContent="center" alignItems="center" sx={{mb: 2}}>
          <Typography id="help-modal" color="#086788" variant="h3" component="h2">
            Edit Geekle Characters API
          </Typography>
        </Grid>
        <AddCharacter 
          updateAddState={updateAddState}
          addState={addState}
          numCharacters={numCharacters}
          updateNumCharacters={updateNumCharacters}
        />
        <EditCharacter 
          updateEditState={updateEditState}
          editState={editState}
          updateNumCharacters={updateNumCharacters}
        />
        <DeleteCharacter 
          updateDeleteState={updateDeleteState}
          deleteState={deleteState}
          numCharacters={numCharacters}
          updateNumCharacters={updateNumCharacters}
        />
      </Box>
    </ThemeProvider>
  );
}

export default EditAPI;