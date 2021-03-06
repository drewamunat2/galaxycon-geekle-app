import { Grid, Typography, Button, Link } from '@mui/material';
import EmojiSolution from './EmojiSolution';
import { Image, StyleSheet, View } from 'react-native';
import {HiOutlineClipboardCopy} from "react-icons/hi"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Component } from "react";
import PercentagesEasy from './PercentagesEasy';
import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

const styles = StyleSheet.create({
  img: {
    width: 335,
    height: 335,
  },
  view: {
    alignContent: 'center',
    alignItems: 'center'
  }
});

const stylesMobile = StyleSheet.create({
  img: {
    width: 135,
    height: 135,
  },
  view: {
    alignContent: 'center',
    alignItems: 'center'
  }
});

class EasyModeSolution extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: '',
      copied: false,
      eventLink: '',
      eventImg: '',
      solutionLink: '',
      solutionImg: '',
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
    let topRow = "Geekle 4 - " + this.props.mode + ' ' + numTurns + "/8\n\n";
    let grid = this.state.grid;
    let link = 'http://geekle.live/'
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
    this.setState({ 
      eventLink: "https://galaxycon.com/pages/raleigh",
      eventImg: "https://cdn.shopify.com/s/files/1/0275/9209/7837/t/5/assets/raleighnew1080-1-1653068224677.png?v=1653068230",
      solutionLink: this.props.solution.shop,
      solutionImg: this.props.solution.image,
    });
  }

  nameColor = () => {
    if(this.props.isCorrect){
      return '#06b506';
    }
    return '#FF4242'
  };

  render () {
    return (
      <>
        <Grid container sx={{ display: {xs: 'none', lg: 'flex'}}}>
          <Grid item xs={5}>
            <Typography display='block' id="rules-of-the-game" color="#086788" variant="h4" sx={{ mt: 5, mb: 4 }}>
              Upcoming Events
            </Typography>
            <View style={styles.view}>
              <Link href={this.state.eventLink}>
                <Image
                  style={styles.img}
                  source={this.state.eventImg}
                />
              </Link>
              <Button sx={{ mt: 2 }} display='block' color="info" variant="contained" href={this.state.eventLink}> 
                Learn More
              </Button>
            </View>
          </Grid>
          <Grid item xs={2}>
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
          <Grid item xs={5}>
            <Typography display='block' id="rules-of-the-game" color="#086788" variant="h4" sx={{ mt: 2, mb: 2 }}>
              Check out {this.props.solution.title} Collections {'&'} Events
            </Typography>
            <View style={styles.view}>
              <Link href={this.state.solutionLink}>
                <Image
                  style={styles.img}
                  source={this.state.solutionImg}
                />
              </Link>
              <Button sx={{ mt: 2 }} display='block' color="info" variant="contained" href={this.state.solutionLink}> 
                View All
              </Button>
            </View>
          </Grid>
        </Grid>

        <Grid container sx={{ display: {xs: 'flex', lg: 'none'}}}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
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
              <Button display='block' color="info" variant="contained"> 
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
          <Grid item xs={2}></Grid> 
          <Typography display='block' id="rules-of-the-game" color="#086788" variant="h4" sx={{ mt: 2, mb: 2 }}>
            Check out {this.props.solution.title} Collections {'&'} Events
          </Typography>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <View style={stylesMobile.view}>
              <Link href={this.state.solutionLink}>
                <Image
                  style={stylesMobile.img}
                  source={this.state.solutionImg}
                />
              </Link>
              <Button sx={{ mt: 2 }} display='block' color="info" variant="contained" href={this.state.solutionLink}> 
                See All
              </Button>
            </View>
          </Grid>
          <Grid item xs={2}></Grid>
          <Typography display='block' id="rules-of-the-game" color="#086788" variant="h4" sx={{ mt: 2, mb: 2 }}>
              Upcoming Events
          </Typography>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <View style={stylesMobile.view}>
              <Link href={this.state.eventLink}>
                <Image
                  style={stylesMobile.img}
                  source={this.state.eventImg}
                />
              </Link>
              <Button sx={{ mt: 2, mb: 2 }} display='block' color="info" variant="contained" href={this.state.eventLink}> 
                Learn More
              </Button>
            </View>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </>
    );
  }
}

export default EasyModeSolution;

