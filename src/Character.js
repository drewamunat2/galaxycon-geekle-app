import { Container } from "@mui/system";

function Character(props) {

  const { 
    index, 
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
    <Container className="is-max-widescreen" key={index} disableGutters={true}>
      <div className="tile is-ancestor has-text-centered">
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
      </div>
    </Container>
  );

}


export default Character;