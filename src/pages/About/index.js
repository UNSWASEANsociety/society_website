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
import Ones from "./Ones";
import AboutASEAN from "./AboutASEAN";
import ASEANPillars from "./ASEANPillars";
import ASEANCommunity from "./ASEANCommunity";
import { Youtube } from "../../components/Youtube";

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
        <Ones />
      </Block>
      <Block>
        <AboutASEAN />
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          What is ASEAN?
        </Typography>
        <Youtube videoId="VDTdXDDzJ1k" />

      </Block>
      <Block>
        <ASEANCommunity />
      </Block>
      <Block>
        <ASEANPillars />
      </Block>
    </>
  );
};

export default About;
