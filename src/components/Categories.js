import { Grid, Paper } from "@mui/material";

function Categories() {

  return (
    <div className="categories">
      <Grid container>
        <Grid 
          container
          key="categories"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={0} lg={2}>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#fff0ff' 
              }}
            />
          </Grid>
          <Grid item xs={0} lg={3}>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: `#fff0ff`
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
              Gender
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
          <Grid item xs={0} lg={2}>
            <Paper 
              elevation={0} 
              square={true}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                verticalAlign: "middle",
                backgroundColor: '#fff0ff' 
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Categories;