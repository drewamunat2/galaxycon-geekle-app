import { Grid, Typography, Button} from '@mui/material';
import EmojiSolution from './EmojiSolution';
import {HiOutlineClipboardCopy} from "react-icons/hi"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Component } from "react";

class EasyModeSolution extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: '',
      turns: 0
    };
  }

  emoji = (color) => {
    if (color === 'green') {
      return "🟩";
    } else if (color === 'yellow') {
      return "🟨";
    } else {
      return "⬛️";
    }
  }

  onShare = () => {
    let topRow = "Geekle 1 " + this.state.turns + "/8\n\n";
    let grid = this.state.grid;
    let link = 'https://galaxycon-geekle-app.netlify.app/'
    return topRow + grid + link;
  }

  componentDidMount = () => {
    console.log(this.props.colors);
    for (const name of this.props.colors) {
      let row = '';
      let genderColor = this.emoji(name.colors.genderColor);
      let roleColor = this.emoji(name.colors.roleColor);
      let showColor = this.emoji(name.colors.showColor);
      let genreColor = this.emoji(name.colors.genreColor);
      let platformColor = this.emoji(name.colors.platformColor);
      let yearColor = this.emoji(name.colors.yearColor);
      row = genderColor + ' ' + roleColor + ' ' + showColor + ' ' + genreColor + ' ' + platformColor + ' ' + yearColor + '\n';
      this.setState( prevState => ({ 
        grid: prevState.grid + row
      }));
      this.setState( prevState => ({ 
        turns: prevState.turns + 1
      }));
    }
  }

  nameColor = () => {
    if(this.props.isCorrect){
      return '#06b506';
    }
    return '#FF4242'
  };

  render () {
    return (
      <Grid container>
        <Grid item xs={6}>
          <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
            EASY MODE
          </Typography>
          <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
            local storage stats coming soon
          </Typography>
          <Typography display='block' id="rules-of-the-game" variant="h6" color="#086788" sx={{ mb: .5, mt: 0, textDecoration: 'underline' }}>
            Solution
          </Typography>
          <Typography display='block' id="rules-of-the-game" color={this.nameColor()} sx={{ mb: 0, mt: 0 }}>
            {this.props.solution.name}
          </Typography>
          <EmojiSolution colors={this.props.colors} updateGrid={this.updateGrid}/>
          <CopyToClipboard text={this.onShare()}>
            <Button sx={{ mb: 2, mt: 0 }} display='block' color="info" variant="contained"> 
              Share<HiOutlineClipboardCopy/>
            </Button>
          </CopyToClipboard>
        </Grid>
        <Grid item xs={6}>
          <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
            HARD MODE
          </Typography>
          <Typography display='block' id="rules-of-the-game" color="#a8a8a8">
            coming soon
          </Typography>
          <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
            coming soon
          </Typography>
          <Typography display='block' id="rules-of-the-game" variant="h6" color="#086788" sx={{textDecoration: 'underline'}}>
            Solution
          </Typography>
          <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: .5, mt: 0 }}>
            ?
          </Typography>
          <Button sx={{ mb: 2, mt: 0 }} display='block' color="info" variant="contained" href='/'> 
            Play Now 
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default EasyModeSolution;