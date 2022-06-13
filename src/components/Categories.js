import { Grid, Paper } from "@mui/material";

function Categories() {

  return (
    <div className="categories">
      <Grid container>
        <Grid 
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            mx: "10%"
          }}
        >
          <Grid item xs={0} lg={4}>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            />
          </Grid>
          <Grid item xs={2} lg>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            >
              gender
            </Paper>
          </Grid>
          <Grid item xs={2} lg>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            >
              Appears In
            </Paper>
          </Grid>
          <Grid item xs={2} lg>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            >
              Genre
            </Paper>
          </Grid>
          <Grid item xs={2} lg>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            >
              Platform
            </Paper>
          </Grid>
          <Grid item xs={2} lg>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            >
              Role
            </Paper>
          </Grid>
          <Grid item xs={2} lg>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#ffeeff' 
              }}
            >
              Year
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Categories;