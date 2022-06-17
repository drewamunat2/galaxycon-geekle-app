import { Grid } from "@mui/material";
import EmojiSolutionRow from "./EmojiSolutionRow";
import { Component } from "react";

class EmojiSolution extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: ''
    };
  }

  //update results with new emojis
  updateResults = (data) => {
    this.setState( prevState => ({ 
      results: prevState.results + data
    }));
  };

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
                  updateResules={this.updateResults}
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