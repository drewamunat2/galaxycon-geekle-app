import { Container, } from "@mui/system";
import PropTypes from "prop-types";
import {useState} from "react";

function Characters(props) {

  const { characters, colors } = props;

  console.log(characters);
  console.log(colors);

  const checkName = (name) => {
    return 'wrong';
  }

  return (
    <div className='to-bottom characters-container'>
      <Container className="is-max-widescreen" id="characters">
        <section className="section has-background-lighter-pink is-small">
          {
            characters.map((character, index) => {
              return (
                <Container className="is-max-widescreen guess-border" key={index}>
                  <div className="tile is-ancestor has-text-centered">
                    <div className={`tile is-3 ${checkName(character.name)}`}>
                        <p className="title has-text-info-dark">{character.name}</p>
                    </div>
                      <div className="tile wrong">
                          <p className="sub-title has-text-link ">{character.characteristics.gender}</p>
                      </div>
                      <div className="tile wrong">
                          <p className="sub-title has-text-link">{character.characteristics.show}</p>
                      </div>
                      <div className="tile wrong">
                          <p className="sub-title has-text-link">{character.characteristics.genre}</p>
                      </div>
                      <div className="tile wrong">
                          <p className="sub-title has-text-link">{character.characteristics.platform}</p>
                      </div>
                      <div className="tile wrong">
                          <p className="sub-title has-text-link">{character.characteristics.role}</p>
                      </div>
                      <div className="tile wrong">
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
  characters: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired
};