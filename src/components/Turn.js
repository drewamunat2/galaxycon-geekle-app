import { Paper } from "@mui/material";

function Turn(props) {

  const { turn } = props;

  if( turn>0 ) {
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
        {turn + ' of 8 guesses'} 
      </Paper>
    );
  } else {
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
        }}
      >
        Select a character to begin!
      </Paper>
    )
  }
}

export default Turn;