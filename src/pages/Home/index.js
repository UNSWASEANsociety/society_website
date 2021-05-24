import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  Snackbar,
  Button,
  Grid,
} from "@material-ui/core/";
import { ParallaxBlock } from "../../components/Block";
import { Block } from "../../components/Block";
import { Youtube } from "../../components/Youtube";
import { Card } from "../../components/Card";

import { TypingText } from "../../components/TypingText";
import Categories from "./AsortedList";
import CardOnCard from "../../components/CardOnCard/CardOnCard";
import Values from "./Values";
import Purpose from "./Purpose";
import About from "./About";
import MissionVision from "./Mission_Vision";

const Home = () => {
  return (
    <>
      <ParallaxBlock
        image="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      >
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          <TypingText
            text="Welcome to UNSW ASEAN Society"
            speed={50}
            typePrompt="|"
          />
        </Typography>
      </ParallaxBlock>
      <Block>
        <About />
      </Block>
      <Block>
        <MissionVision />
      </Block>
      <Block>
        <Purpose />
      </Block>
      <Block>
        <Values />
      </Block>
      <Block style={{ backgroundColor: "white" }}>
        {/* <h1>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
        </h1> */}
        <Grid container>
          <Grid item md={3}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              This is a pretty good picture yeah?
              <br />- martin luther king
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={8}>
            <img
              src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
              width="100%"
            />
          </Grid>
        </Grid>
      </Block>

      <Block>
        <Grid container>
          <Grid item md={8}>
            <img src="https://source.unsplash.com/random" alt="" width="100%" />
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={3}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              This is a pretty good picture yeah?
              <br />- Author 2
            </Typography>
          </Grid>
        </Grid>
      </Block>
      <Block>
        <Categories />
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Youtube Video
        </Typography>
        <Youtube videoId="dQw4w9WgXcQ" />
      </Block>
    </>
  );
};

export default Home;
