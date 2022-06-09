function Turn(props) {

  const { turn, updateTurn } = props;

  updateTurn(turn);

  return (
    <header className="is-small">
      <div className="hero-body">
        <p className="subtitle has-text-centered has-text-danger">
          {turn} of 8 guesses      
        </p>
      </div>
    </header>
  );
}

export default Turn;