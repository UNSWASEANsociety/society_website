import { Grid, Typography } from "@material-ui/core";
import React from "react";

const ASEANPillars = () => {
  // TODO download images instead of using squarespace-cdn
  // TODO align text
  return (
    <>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        The Three ASEAN Pillars…
      </Typography>
      <Grid container>
        <Grid item md={4} style={{ padding: "0 1rem" }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1590486769648-U7EOEEJJSX8VJ2XS7IS8/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kT3PXaDTw6fk-7hFv8qtuO9cQCsc0TvODI6VkiZtuEfknLoiRIu-kWfCHsqWGB43w/Socio-Cultural+Community.png?format=500w"
            width="100%"
            alt="img"
          />
          <Typography style={{color: "#F26A51"}} variant="h4" align="center" paragraph>
            Socio-Cultural <br/>Community
          </Typography>
          <Typography variant="h6" align="left" paragraph>
            At the heart of the ASEAN Socio-Cultural Community (ASCC) is the
            commitment to lift the quality of life of its peoples through
            cooperative activities that are people-oriented, people-centred,
            environmentally friendly, and geared towards the promotion of
            sustainable development to face new and emerging challenges in
            ASEAN.
          </Typography>
        </Grid>
        <Grid item md={4} style={{ padding: "0 1rem" }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1590486733056-51E0GOXB06BGT0LLOCV6/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kT3PXaDTw6fk-7hFv8qtuO9cQCsc0TvODI6VkiZtuEfknLoiRIu-kWfCHsqWGB43w/Economic+Community.png?format=500w"
            width="100%"
            alt="img"
          />
          <Typography  style={{color: "#FFC956"}} variant="h4" align="center" paragraph>
            Economic <br/> Community
          </Typography>
          <Typography variant="h6" align="left" paragraph>
            The establishment of the ASEAN Economic Community (AEC) in 2015 is a
            major milestone in the regional economic integration agenda of
            ASEAN, offering opportunities in the form of a huge market of USD
            2.6 trillion and over 622 million people.
          </Typography>
        </Grid>
        <Grid item md={4} style={{ padding: "0 1rem" }}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1590486704837-QE5XMSRYO44FLE54UDG6/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kT3PXaDTw6fk-7hFv8qtuO9cQCsc0TvODI6VkiZtuEfknLoiRIu-kWfCHsqWGB43w/Political+Security.png?format=500w"
            width="100%"
            alt="img"
          />
          <Typography style={{color: "#89C765"}} variant="h4" align="center" paragraph>
            Political-Security Community
          </Typography>
          <Typography variant="h6" align="left" paragraph>
            To build on regional developments in the field of political and
            security cooperation, the ASEAN Leaders have agreed to establish the
            ASEAN Political- Security Community (APSC). The APSC aims to ensure
            peace between the countries in the region and with the wider world
            in a cohesive, democratic and harmonious environment.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ASEANPillars;
