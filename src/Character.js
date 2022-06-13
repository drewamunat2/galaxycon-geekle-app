import { Grid, Paper } from "@mui/material";

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
      <Grid item xs={12} lg={4}>
        <Paper 
          elevation={0} 
          square={true}
          sx={{
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            verticalAlign: "middle",
            backgroundColor: `${nameColor}`
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
            backgroundColor: `${genderColor}`
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
            backgroundColor: `${showColor}`
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
            backgroundColor: `${genreColor}`
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
            backgroundColor: `${platformColor}`
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
            backgroundColor: `${roleColor}`
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
            backgroundColor: `${yearColor}`
          }}
        >
          {character.characteristics.year} <i className={`${arrow}`}>{icon}</i>
        </Paper>
      </Grid>
    </>



    /*<div className="tile is-ancestor has-text-centered">
      <div className={`tile is-3 ${nameColor}`}>
          <p className="title has-text-info-dark">{character.name}</p>
      </div>
        <div className={`tile game-background ${genderColor}`}>
            <p className="sub-title game-font-color">{character.characteristics.gender}</p>
        </div>
        <div className={`tile game-background ${showColor}`}>
            <p className="sub-title game-font-color">{character.characteristics.show}</p>
        </div>
        <div className={`tile game-background ${genreColor}`}>
            <p className="sub-title game-font-color">{character.characteristics.genre}</p>
        </div>
        <div className={`tile game-background ${platformColor}`}>
            <p className="sub-title game-font-color">{character.characteristics.platform}</p>
        </div>
        <div className={`tile game-background ${roleColor}`}>
            <p className="sub-title game-font-color">{character.characteristics.role}</p>
        </div>
        <div className={`tile game-background ${yearColor}`}>
          <p className="sub-title game-font-color">{character.characteristics.year} <i className={`${arrow}`}>{icon}</i></p>
        </div>
    </div>*/
  );

}


export default Character;