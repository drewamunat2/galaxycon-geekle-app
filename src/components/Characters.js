import { Container, } from "@mui/system";
import { Card } from "@mui/material";
import PropTypes from "prop-types";

function Characters(props) {
  const { characters } = props;

  return (
    <div className='to-bottom characters-container'>
      <Container className="is-max-widescreen" id="characters">
        <section className="section has-background-lighter-pink is-small">
          {
            characters.map((character, index) => {
              return (
                <Container className="is-max-widescreen" key={index}>
                  <div className="tile is-ancestor">
                    <div className="tile is-3">
                        <p className="title">{character.name}</p>
                    </div>
                    <div className="tile">
                        <p className="sub-title">{character.characteristics.gender}</p>
                    </div>
                    <div className="tile">
                        <p className="sub-title">{character.characteristics.show}</p>
                    </div>
                    <div className="tile">
                        <p className="sub-title">{character.characteristics.genre}</p>
                    </div>
                    <div className="tile">
                        <p className="sub-title">{character.characteristics.platform}</p>
                    </div>
                    <div className="tile">
                        <p className="sub-title">{character.characteristics.role}</p>
                    </div>
                    <div className="tile">
                        <p className="sub-title">{character.characteristics.year}</p>
                    </div>
                  </div>
                </Container>
              )
            })
          }
        </section>
      </Container>
    </div>
  );
}

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};