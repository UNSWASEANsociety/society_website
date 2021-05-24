import React from "react";
import { Typography } from "@material-ui/core/";

const About = () => {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
          About UNSW ASEAN Society
        </Typography>
        <hr />
        <br />
        <Typography variant="h5" paragraph>
          We, UNSW ASEAN Society, are a community-based non-for-profit
          organisation that aims to facilitate discussions on issues occurring
          in the Southeast Asian region. We aim to educate and empower our
          members through providing opportunities for them to learn and grow
          whether it may be through seminars, events or general initiatives.
        </Typography>
    </>
  );
};

export default About;
