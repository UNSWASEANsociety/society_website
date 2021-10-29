import { Grid, Typography } from "@material-ui/core";
import React from "react";

const ASEANCommunity = () => {
  return (
    <>
      <Grid container>
        <Grid item md={5}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography component="h2" variant="h3" gutterBottom>
              ASEAN Community
            </Typography>
          </div>
        </Grid>
        <Grid item md={7}>
          <Typography variant="h6" paragraph>
            The ASEAN Vision 2020, adopted by the ASEAN Leaders on the 30th
            Anniversary of ASEAN, agreed on a shared vision of ASEAN as a
            concert of Southeast Asian nations, outward looking, living in
            peace, stability and prosperity, bonded together in partnership in
            dynamic development and in a community of caring societies. At the
            9th ASEAN Summit in 2003, the ASEAN Leaders resolved to establish an
            ASEAN Community. At the 12th ASEAN Summit in January 2007, leaders
            affirmed their strong commitment to accelerate the establishment of
            an ASEAN Community by 2015 and signed the Cebu Declaration on the
            Acceleration of the Establishment of an ASEAN Community by 2015.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ASEANCommunity;
