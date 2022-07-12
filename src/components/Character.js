import { Grid, Paper } from "@mui/material";
import CharacterBorder from "./CharacterBorder";

function Character(props) {

  const { 
    character,
    nameColor,
    genderColor,
    appearsInColor,
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
      <Grid item xs={12} lg={2} color='primary'>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "100px",
            display: { lg: 'flex', xs: 'none' },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${nameColor}`,
            color: "#080357",
            fontSize: 25,
            fontWeight: 500
          }}
        >
          {character.name}
        </Paper>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "50px",
            display: { lg: 'none', xs: 'flex' },
            justifyContent: "left",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${nameColor}`,
            fontWeight: 500,
            color: "#080357",
            fontSize: 25,
            pl: "2%"
          }}
        >
          {character.name}
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} lg>
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
          }}
        >
          {character.gender}
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} lg>
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
          }}
        >
          {character.role}
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} lg>
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
            backgroundColor: `${appearsInColor}`,
          }}
        >
          {character.appearsIn}
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} lg>
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
          }}
        >
          {character.genre}
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} lg>
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
          }}
        >
          {character.platform}
        </Paper>
      </Grid>
      <Grid item xs={2} sm={2} lg>
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
          }}
        >
          {character.year} <i className={`${arrow}`}>{icon}</i>
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