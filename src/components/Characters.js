import { Container, } from "@mui/system";
import PropTypes from "prop-types";
import {useState} from "react";

function Characters(props) {

  const { characters, colors } = props;
  let colorMap = {};

  console.log(characters);
  console.log(colors);


  return (
    <div className='to-bottom characters-container'>
      <Container className="is-max-widescreen" id="characters">
        <section className="section has-background-lighter-pink is-small">
          {
            characters.map((character, index) => {
              colorMap = colors.find(item => item.key === character.name);
              return (
                <Container className="is-max-widescreen guess-border" key={index}>
                  <div className="tile is-ancestor has-text-centered">
                    <div className={`tile is-3 ${colorMap.colors.name}`}>
                        <p className="title has-text-info-dark">{character.name}</p>
                    </div>
                      <div className={`tile ${colorMap.colors.gender}`}>
                          <p className="sub-title has-text-link ">{character.characteristics.gender}</p>
                      </div>
                      <div className={`tile ${colorMap.colors.show}`}>
                          <p className="sub-title has-text-link">{character.characteristics.show}</p>
                      </div>
                      <div className={`tile ${colorMap.colors.genre}`}>
                          <p className="sub-title has-text-link">{character.characteristics.genre}</p>
                      </div>
                      <div className={`tile ${colorMap.colors.platform}`}>
                          <p className="sub-title has-text-link">{character.characteristics.platform}</p>
                      </div>
                      <div className={`tile ${colorMap.colors.role}`}>
                          <p className="sub-title has-text-link">{character.characteristics.role}</p>
                      </div>
                      <div className={`tile ${colorMap.colors.year}`}>
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