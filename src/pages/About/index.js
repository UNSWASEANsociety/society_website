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
      <ParallaxBlock>
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
