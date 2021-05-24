import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Button, Grid } from "@material-ui/core";
import { Block, ParallaxBlock } from "../../components/Block";
import { Accordion } from "../../components/Accordion";
import { TimeLine } from "../../components/TimeLine";

import { CardOnCard } from "../../components/CardOnCard";
import { AutoCarousel } from "../../components/Carousel";

const About = () => {
  return (
    <>
      <ParallaxBlock image="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          We believe in everything ASEAN…
        </Typography>
      </ParallaxBlock>
      {/* <TestCarousel /> */}
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          One Vision. One Identity. One Community.
        </Typography>
        idea: Use caroursel to rotate between the 3 items
        <AutoCarousel />
      </Block>
      <Block>
        <CardOnCard image="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1589800399092-85P5QO8IG91A062FTEJ4/ke17ZwdGBToddI8pDm48kFQQgP34qnCpeHaeAOzTt7pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIedjZT6_OBzi2ofH1EqNdNeCRxNMlbxs9807lIebBlcA/flags.png?format=750w">
          <Typography component="h2" variant="h3" gutterBottom>
            About ASEAN…
          </Typography>
          <Typography variant="h6" paragraph>
            The Association of Southeast Asian Nations, or ASEAN, was
            established on 8 August 1967 in Bangkok, Thailand, with the signing
            of the ASEAN Declaration (Bangkok Declaration) by the Founding
            Fathers of ASEAN, namely Indonesia, Malaysia, Philippines, Singapore
            and Thailand. Brunei Darussalam then joined on 7 January 1984,
            Vietnam on 28 July 1995, Lao PDR and Myanmar on 23 July 1997, and
            Cambodia on 30 April 1999, making up what is today the ten Member
            States of ASEAN.
          </Typography>
          <Button variant="outlined" href="https://asean.org/">
            Learn More...
          </Button>
        </CardOnCard>
      </Block>
      <Block>
        <Grid container>
          <Grid item md={5}>
            <Typography component="h2" variant="h3" gutterBottom>
              ASEAN Community
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Typography variant="h6" paragraph>
              The ASEAN Vision 2020, adopted by the ASEAN Leaders on the 30th
              Anniversary of ASEAN, agreed on a shared vision of ASEAN as a
              concert of Southeast Asian nations, outward looking, living in
              peace, stability and prosperity, bonded together in partnership in
              dynamic development and in a community of caring societies. At the
              9th ASEAN Summit in 2003, the ASEAN Leaders resolved to establish
              an ASEAN Community. At the 12th ASEAN Summit in January 2007,
              leaders affirmed their strong commitment to accelerate the
              establishment of an ASEAN Community by 2015 and signed the Cebu
              Declaration on the Acceleration of the Establishment of an ASEAN
              Community by 2015.
            </Typography>
          </Grid>
        </Grid>
      </Block>
      <Block>
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
            <Typography variant="h4" align="center" paragraph>
              ASEAN Socio-Cultural Community
            </Typography>
            <Typography variant="h6" align="center" paragraph>
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
              src="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1590486769648-U7EOEEJJSX8VJ2XS7IS8/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kT3PXaDTw6fk-7hFv8qtuO9cQCsc0TvODI6VkiZtuEfknLoiRIu-kWfCHsqWGB43w/Socio-Cultural+Community.png?format=500w"
              width="100%"
              alt="img"
            />
            <Typography variant="h4" align="center" paragraph>
              ASEAN Socio-Cultural Community
            </Typography>
            <Typography variant="h6" align="center" paragraph>
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
              src="https://images.squarespace-cdn.com/content/v1/5eba756bbb839b7b67d0b667/1590486769648-U7EOEEJJSX8VJ2XS7IS8/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kT3PXaDTw6fk-7hFv8qtuO9cQCsc0TvODI6VkiZtuEfknLoiRIu-kWfCHsqWGB43w/Socio-Cultural+Community.png?format=500w"
              width="100%"
              alt="img"
            />
            <Typography variant="h4" align="center" paragraph>
              ASEAN Socio-Cultural Community
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              At the heart of the ASEAN Socio-Cultural Community (ASCC) is the
              commitment to lift the quality of life of its peoples through
              cooperative activities that are people-oriented, people-centred,
              environmentally friendly, and geared towards the promotion of
              sustainable development to face new and emerging challenges in
              ASEAN.
            </Typography>
          </Grid>
        </Grid>
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Some accordion
        </Typography>
        <Accordion />
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Some timeline library
        </Typography>
        <TimeLine />
      </Block>
    </>
  );
};

export default About;
