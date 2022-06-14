import { Stack, Paper } from "@mui/material";
import Turn from "./Turn";


function Title(props) {

  const { turn } = props;

  return (
    
    <Stack>
      <Paper 
        elevation={0} 
        square={true}
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          verticalAlign: "middle",
          backgroundColor: "#fff0ff",
          color: "#080357",
          fontSize: "100px",
        }}>
          Geekle
      </Paper>
      <Paper 
        elevation={0} 
        square={true}
        sx={{
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          verticalAlign: "middle",
          backgroundColor: "#fff0ff",
          color: "#086788",
          fontSize: "20px",
          mx: 10
        }}>
          GALAXYCON CHARACTER GUESSING GAME 
      </Paper>
      <Turn 
        turn={turn}
      />
    </Stack>
  );
}

export default Title;