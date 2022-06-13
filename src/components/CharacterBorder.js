import { Grid, Paper } from "@mui/material";

function CharacterBorder() {

  return (
    <>
      <Grid item xs={0} lg={2}>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: '#fff0ff' 
          }}
        />
      </Grid>
      <Grid item xs={12} lg={8}>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "1px",
            backgroundColor: "#000000"
          }}
        >
        </Paper>
      </Grid>
      <Grid item xs={0} lg={2}>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: '#fff0ff' 
          }}
        />
      </Grid>
    </>
  )
}

export default CharacterBorder;