import { Grid, Typography, Button} from '@mui/material';
import EmojiSolution from './EmojiSolution';
import {HiOutlineClipboardCopy} from "react-icons/hi"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Component } from "react";
import PercentagesEasy from './PercentagesEasy';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

class EasyModeSolution extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: '',
      copied: false,
    }
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
    let numTurns = this.props.turn;
    if(!this.props.isCorrect && this.props.turn === 8) {
      numTurns = 'X';
    }
    let topRow = "Geekle 1 - " + numTurns + "/8\n\n";
    let grid = this.state.grid;
    let link = 'https://galaxycon-geekle-app.netlify.app/'
    return topRow + grid + link;
  }

  componentDidMount = () => {
    for (const name of this.props.colors) {
      let row = '';
      let genderColor = this.emoji(name.colors.genderColor);
      let roleColor = this.emoji(name.colors.roleColor);
      let appearsInColor = this.emoji(name.colors.appearsInColor);
      let genreColor = this.emoji(name.colors.genreColor);
      let platformColor = this.emoji(name.colors.platformColor);
      let yearColor = this.emoji(name.colors.yearColor);
      row = genderColor + roleColor + appearsInColor + genreColor + platformColor + yearColor + '\n';
      this.setState( prevState => ({ 
        grid: prevState.grid + row
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
        <Grid item /*xs={12}*/ xs={6}>
          <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
            EASY MODE
          </Typography>
          <PercentagesEasy
            totalGamesPlayed={this.props.totalGamesPlayed}
            totalGamesWon={this.props.totalGamesWon}
          />
          <Typography display='block' id="rules-of-the-game" variant="h6" color="#086788" sx={{ mb: .5, mt: 0, textDecoration: 'underline' }}>
            Solution
          </Typography>
          <Typography display='block' id="rules-of-the-game" color={this.nameColor()} sx={{ mb: 0, mt: 0 }}>
            {this.props.solution.name}
          </Typography>
          <EmojiSolution colors={this.props.colors} updateGrid={this.updateGrid}/>
          <CopyToClipboard text={this.onShare()} onCopy={() => this.setState({copied: true})}>
            <Button sx={{ mb: 2, mt: 0 }} display='block' color="info" variant="contained"> 
              Share<HiOutlineClipboardCopy/>
            </Button>
          </CopyToClipboard>
          <Snackbar 
            key={'topcenter'}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            open={this.state.copied} 
            autoHideDuration={6000} 
            onClose={() => this.setState({copied: false})}
          >
            <Alert variant="filled" severity="success">
              Copied to Clipboard!
            </Alert>
          </Snackbar>
        </Grid>
        <Grid item /*sx={{display: {xs: 'none'}}}*/ xs={6}>
          <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
            HARD MODE
          </Typography>
          <Typography display='block' id="rules-of-the-game" variant="h6" color="#a8a8a8">
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
          <Button sx={{ mb: 2, mt: 0 }} disabled display='block' color="info" variant="contained" href='/'> 
            Play Now 
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default EasyModeSolution;