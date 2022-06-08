import { Container, } from "@mui/system";
import { Card } from "@mui/material";
import PropTypes from "prop-types";

function Characters(props) {
  const { characters, solution } = props;

  console.log(solution);

  return (
    <div className='to-bottom characters-container'>
      <Container className="is-max-widescreen" id="characters">
        <section className="section has-background-lighter-pink is-small">
          {
            characters.map((character, index) => {
              return (
                <Container className="is-max-widescreen guess-border" key={index}>
                  <div className="tile is-ancestor has-text-centered">
                    <div className="tile is-3">
                        <p className="title has-text-info-dark">{character.name}</p>
                    </div>
                      <div className="tile character-characteristics">
                          <p className="sub-title has-text-link">{character.characteristics.gender}</p>
                      </div>
                      <div className="tile character-characteristics">
                          <p className="sub-title has-text-link">{character.characteristics.show}</p>
                      </div>
                      <div className="tile character-characteristics">
                          <p className="sub-title has-text-link">{character.characteristics.genre}</p>
                      </div>
                      <div className="tile character-characteristics">
                          <p className="sub-title has-text-link">{character.characteristics.platform}</p>
                      </div>
                      <div className="tile character-characteristics">
                          <p className="sub-title has-text-link">{character.characteristics.role}</p>
                      </div>
                      <div className="tile character-characteristics">
                          <p className="sub-title has-text-link">{character.characteristics.year}</p>
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