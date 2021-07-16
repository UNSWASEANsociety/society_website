import React from "react";
import { Typography, Grid} from "@material-ui/core/";

const Mission_Vision = () => {
  return (
    <>
      <Grid container>
        <Grid item md={5} xs={12}>
          <Typography style={{color: "#F26A51"}} component="h1" variant="h2" align="center" gutterBottom>
            MISSION
          </Typography>
          <Typography variant="h5"  align="center" paragraph>
            To become one of the global leads on youth empowerment for social
            impact in ASEAN and Indo-Pacific.
          </Typography>
        </Grid>
        <Grid item md={2} xs={0}></Grid>
        <Grid item md={5} xs={12}>
          <Typography style={{color: "#89C765"}} component="h1" variant="h2" align="center" gutterBottom>
            VISION
          </Typography>
          <Typography variant="h5"  align="center" paragraph>
            Enabling Growth. Unleashing Potential.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Mission_Vision;
