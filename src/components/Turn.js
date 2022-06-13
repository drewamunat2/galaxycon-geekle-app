import { Paper } from "@mui/material";

function Turn(props) {

  const { turn, updateTurn } = props;

  const printAndUpdateTurn = () => {
    updateTurn(turn);
    return turn + ' of 8 guesses';
  };

  return (
    <Paper 
      elevation={0} 
      square={true}
      sx={{
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        verticalAlign: "middle",
        backgroundColor: "#fff0ff",
        color: "#FF4242"
    }}>
      {printAndUpdateTurn()} 
    </Paper>
  );
}

export default Turn;