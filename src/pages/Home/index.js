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
import AsortedList from "../../components/AsortedList/AsortedList";
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
    </>
  );
};

export default Home;
