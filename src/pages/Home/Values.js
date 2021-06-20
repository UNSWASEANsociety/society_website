import React from "react";
import { Grid, Typography } from "@material-ui/core/";

const Values = () => {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        VALUES
      </Typography>
      <Grid container>
        <Grid item md={6}>
          <Typography style={{color: "#F26A51"}} component="h2" variant="h3" align="center" gutterBottom>
            Inclusive
          </Typography>
          <Typography component="h3" variant="h5" align="center" gutterBottom>
            Add something here
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography style={{color: "#FFC956"}} component="h2" variant="h3" align="center" gutterBottom>
            Empower
          </Typography>
          <Typography component="h3" variant="h5" align="center" gutterBottom>
            Commitment in empowering each other to excel
          </Typography>
        </Grid>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <Grid container>
        <Grid item md={6}>
          <Typography style={{color: "#89C765"}} component="h2" variant="h3" align="center" gutterBottom>
            Respect
          </Typography>
          <Typography component="h3" variant="h5" align="center" gutterBottom>
            Respecting each others diversity and remaining inclusive
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography style={{color: "#374B81"}} component="h2" variant="h3" align="center" gutterBottom>
            Sustainability
          </Typography>
          <Typography component="h3" variant="h5" align="center" gutterBottom>
            Both in terms of sustainability and lasting relations
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Values;
