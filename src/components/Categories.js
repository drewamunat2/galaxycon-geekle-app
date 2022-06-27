import { Grid, Paper } from "@mui/material";

function Categories(props) {

  const { turn } = props

  if(turn > 0){
    return (
      <div className="categories">
          <Grid 
            container
            key="categories"
            justifyContent="center"
            alignItems="center"
            sx={{
              minWidth: 823
            }}
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
            <Grid item xs={0} lg={2}>
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
                  backgroundColor: '#ffeeff',
                  color: '#086788'  
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
                  backgroundColor: '#ffeeff',
                  color: '#086788'  
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
                  backgroundColor: '#ffeeff',
                  color: '#086788' 
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
                  backgroundColor: '#ffeeff',
                  color: '#086788' 
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
                  backgroundColor: '#ffeeff',
                  color: '#086788'  
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
                  backgroundColor: '#ffeeff',
                  color: '#086788'  
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
      </div>
    );
  }
}

export default Categories;