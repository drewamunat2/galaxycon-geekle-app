import { Grid, Typography, Button} from '@mui/material';

function EasyModeNoSolution() {

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography display='block' id="rules-of-the-game" color="#086788" variant="h6" sx={{ mt: 2, mb: 0 }}>
          EASY MODE
        </Typography>
        <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
          local storage stats coming soon
        </Typography>
        <Typography display='block' id="rules-of-the-game" variant="h6" color="#086788" sx={{textDecoration: 'underline'}}>
          Solution
        </Typography>
        <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
          ?
        </Typography>
        <Button sx={{ mb: 2, mt: 0 }} display='block' color="info" variant="contained" href='/'> 
          Play Now 
        </Button>
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
        <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
          ?
        </Typography>
        <Button disabled sx={{ mb: .5, mt: 0 }} display='block' color="info" variant="contained" href='/'> 
          Play Now 
        </Button>
        <Typography display='block' id="rules-of-the-game" color="#a8a8a8" sx={{ mb: 2, mt: 0 }}>
          complete easy mode
        </Typography>
      </Grid>
    </Grid>
  );
}

export default EasyModeNoSolution;