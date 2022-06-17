import Emoji from "./Emoji";
import { Grid } from "@mui/material";
import { Component } from "react";
import PropTypes from "prop-types";

class EmojiSolutionRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: {}
    };
  }

  emoji = (color) => {
    if (color === 'green') {
      return "🟩 ";
    } else if (color === 'yellow') {
      return "🟨 ";
    } else {
      return "⬛️ ";
    }
  }

  render () {
    return(
      <>
        <Grid item sx={{mr:.5}}>
          <Emoji symbol={this.emoji(this.props.colors.genderColor)} label={this.props.colors.genderColor}/> 
        </Grid>
        <Grid item sx={{mr:.5}}>
          <Emoji symbol={this.emoji(this.props.colors.roleColor)} label={this.props.colors.roleColor}/> 
        </Grid>
        <Grid item sx={{mr:.5}}>
          <Emoji symbol={this.emoji(this.props.colors.showColor)} label={this.props.colors.showColor}/> 
        </Grid>
        <Grid item sx={{mr:.5}}>
          <Emoji symbol={this.emoji(this.props.colors.genreColor)} label={this.props.colors.genreColor}/> 
        </Grid>
        <Grid item sx={{mr:.5}}>
          <Emoji symbol={this.emoji(this.props.colors.platformColor)} label={this.props.colors.platformColor}/> 
        </Grid>
        <Grid item sx={{mr:.5}}>
          <Emoji symbol={this.emoji(this.props.colors.yearColor)} label={this.props.colors.yearColor}/> 
        </Grid>
      </>
    );
  }

}

export default EmojiSolutionRow;

EmojiSolutionRow.propTypes = {
  updateResults: PropTypes.func.isRequired,
};