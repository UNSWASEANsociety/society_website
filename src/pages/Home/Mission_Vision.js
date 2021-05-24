import React from "react";
import { Typography, Grid} from "@material-ui/core/";

const Mission_Vision = () => {
  return (
    <>
      <Grid container>
        <Grid item md={5}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Mission
          </Typography>
          <Typography variant="h5" paragraph>
            To become one of the global leads on youth empowerment for social
            impact in ASEAN and Indo-Pacific.
          </Typography>
        </Grid>
        <Grid item md={2}></Grid>
        <Grid item md={5}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Vision
          </Typography>
          <Typography variant="h5" paragraph>
            Enabling Growth. Unleashing Potential.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Mission_Vision;
