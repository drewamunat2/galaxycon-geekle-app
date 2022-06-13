function Turn(props) {

  const { turn, updateTurn } = props;

  const printAndUpdateTurn = () => {
    updateTurn(turn);
    return turn + ' of 8 guesses';
  };

  return (
    <header className="is-small">
      <div className="hero-body">
        <p className="subtitle has-text-centered has-text-danger">
          {printAndUpdateTurn()}      
        </p>
      </div>
    </header>
  );
}

export default Turn;