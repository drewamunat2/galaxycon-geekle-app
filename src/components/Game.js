import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Character from "./Character";
import Categories from "./Categories";

function Game(props) {

  const { characters, colors, solution, turn } = props;
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
    <Box 
      sx={{
        overflowX: 'auto', WebkitTextSizeAdjust: 'none'
      }}
    >
    <Categories 
        turn={turn}
      />
      {
        characters.map((character, index) => {
          colorMap = colors.find(item => item.key === character.name);
          return (
              <Grid
                container
                key={index}
                justifyContent="center"
                alignItems="center"
                sx={{
                  minWidth: 823
                }}
              >
                <Character
                  character={character}
                  nameColor={colorMap.colors.name}
                  genderColor={colorMap.colors.gender}
                  appearsInColor={colorMap.colors.appearsIn}
                  genreColor={colorMap.colors.genre}
                  platformColor={colorMap.colors.platform}
                  roleColor={colorMap.colors.role}
                  yearColor={colorMap.colors.year}
                  arrow={arrow(character.characteristics.year)}
                  icon={icon(character.characteristics.year)} />
              </Grid>
            
          )
        })
      }
    </Box>
  );
}

export default Game;

Game.propTypes = {
  characters: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
};