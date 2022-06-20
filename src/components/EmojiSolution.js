import { Grid } from "@mui/material";
import EmojiSolutionRow from "./EmojiSolutionRow";
import { Component } from "react";

class EmojiSolution extends Component {

  render () {
    return(
        <Grid container sx={{ mb: 1, mt: 0 }}>
        {
          this.props.colors.map((name, index) => {
            return (
              <Grid
                container
                key={index}
                justifyContent="center"
                alignItems="center"
              >
                <EmojiSolutionRow 
                  colors={name.colors}
                  updateResults={this.updateResults}
                />
              </Grid>
            )
          })
        }
      </Grid>
    );
  }

}

export default EmojiSolution;