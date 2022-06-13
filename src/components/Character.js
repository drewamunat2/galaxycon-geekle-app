import { Grid, Paper } from "@mui/material";
import CharacterBorder from "./CharacterBorder";

function Character(props) {

  const { 
    character,
    nameColor,
    genderColor,
    showColor,
    genreColor,
    platformColor,
    roleColor,
    yearColor,
    arrow,
    icon
  } = props;

  return (
    <>
      <CharacterBorder/>
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
      <Grid item xs={12} lg={3}>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${nameColor}`,
            color: "#080357"
          }}
        >
          {character.name}
        </Paper>
      </Grid>
      <Grid item xs={2} lg>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${genderColor}`,
            color: "#086788"
          }}
        >
          {character.characteristics.gender}
        </Paper>
      </Grid>
      <Grid item xs={2} lg>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${showColor}`,
            color: "#086788"
          }}
        >
          {character.characteristics.show}
        </Paper>
      </Grid>
      <Grid item xs={2} lg>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle", 
            backgroundColor: `${genreColor}`,
            color: "#086788"
          }}
        >
          {character.characteristics.genre}
        </Paper>
      </Grid>
      <Grid item xs={2} lg>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${platformColor}`,
            color: "#086788"
          }}
        >
          {character.characteristics.platform}
        </Paper>
      </Grid>
      <Grid item xs={2} lg>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${roleColor}`,
            color: "#086788"
          }}
        >
          {character.characteristics.role}
        </Paper>
      </Grid>
      <Grid item xs={2} lg>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${yearColor}`,
            color: "#086788"
          }}
        >
          {character.characteristics.year} <i className={`${arrow}`}>{icon}</i>
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
  );

}

export default Character;