import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import Character from "../Character";

function Game(props) {

  const { characters, colors, solution } = props;
  let colorMap = {};

  //arrow icon class
  const arrow = (year) => {
    if (year < solution.characteristics.year) {
      return 'bi-BsArrowUp';
    } else if (year > solution.characteristics.year) {
      return 'bi-BsArrowDown';
    }
    return '';
  }

  //show respective arrow icon
  const icon = (year) => {
    if (year < solution.characteristics.year) {
      return '↑';
    } else if (year > solution.characteristics.year) {
      return '↓';
    }
    return '';
  }

  return (

    <Grid container>
      {
        characters.map((character, index) => {
          colorMap = colors.find(item => item.key === character.name);
          return (
            <Grid container item>
              <Character
                index={index}
                character={character}
                nameColor={colorMap.colors.name}
                genderColor={colorMap.colors.gender}
                showColor={colorMap.colors.show}
                genreColor={colorMap.colors.genre}
                platformColor={colorMap.colors.platform}
                roleColor={colorMap.colors.role}
                yearColor={colorMap.colors.year}
                arrow={arrow(character.characteristics.year)}
                icon={icon(character.characteristics.year)}
              />
            </Grid>
          )
        })
      }
    </Grid>


    /*<Container className="is-max-widescreen" id="characters" disableGutters={true}>
        {
          characters.map((character, index) => {
            colorMap = colors.find(item => item.key === character.name);
            return (
              <Character
                index={index}
                character={character}
                nameColor={colorMap.colors.name}
                genderColor={colorMap.colors.gender}
                showColor={colorMap.colors.show}
                genreColor={colorMap.colors.genre}
                platformColor={colorMap.colors.platform}
                roleColor={colorMap.colors.role}
                yearColor={colorMap.colors.year}
                arrow={arrow(character.characteristics.year)}
                icon={icon(character.characteristics.year)}
              />
            )
          })
        }
    </Container>*/
  );
}

export default Game;

Game.propTypes = {
  characters: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
};