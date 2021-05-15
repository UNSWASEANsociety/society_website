import Typography from "@material-ui/core/Typography";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Grid } from "@material-ui/core";
import { Block, ParallaxBlock } from "../../components/Block";

const TestCarousel = () => {
  return (
    <AwesomeSlider>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: 'url("https://source.unsplash.com/random")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        1
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: 'url("https://source.unsplash.com/random")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        2
      </div>
    </AwesomeSlider>
  );
};

const About = () => {

  return (
    <>
      <ParallaxBlock
        height="75vh"
        image="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      >
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          About
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          This is decent
        </Typography>
      </ParallaxBlock>
      {/* <TestCarousel /> */}
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Carousel
        </Typography>
        <TestCarousel />
      </Block>
      {/* TODO Remove!!!!  */}
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
     
    </>
  );
};

export default About;
