import PropTypes from "prop-types";

function Characters(props) {
  const { characters } = props;

  return (
    <section className="section is-medium pt-0 pb-6" id="phonetics">
      <h1 className="title">Guesses</h1>
      {
        characters.map((character, index) => {
          return (
            <article className="message is-medium" key={index}>
              <div className="message-header">
                {character.name}
              </div>
              <div className="message-body">
                {character.characteristics.gender}
              </div>
            </article>
          )
        })
      }
    </section>
  );
}

export default Characters;

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};