import Typography from "@material-ui/core/Typography";
import React from "react";
import "react-awesome-slider/dist/styles.css";
import { Block, ParallaxBlock } from "../../components/Block";
import { Youtube } from "../../components/Youtube";
import AboutASEAN from "./AboutASEAN";
import ASEANCommunity from "./ASEANCommunity";
import ASEANPillars from "./ASEANPillars";
import Ones from "./Ones";
import {Title} from "../../components/Dynamic_Typography"

const About = () => {
  return (
    <>
      <ParallaxBlock height="93vh">
        <Title text="WE BELIEVE IN EVERYTHING ASEAN..."/>
      </ParallaxBlock>
      {/* <TestCarousel /> */}
      <Block>
        <Ones />
      </Block>
      <Block backgroundColor="white">
        <AboutASEAN />
      </Block>
      <Block>
        <Typography style={{color: "#FFC956"}} component="h1" variant="h2" align="center" gutterBottom>
          WHAT IS ASEAN?
        </Typography>
        <Youtube videoId="VDTdXDDzJ1k" />
      </Block>
      <Block backgroundColor="white">
        <ASEANCommunity />
      </Block>
      <Block>
        <ASEANPillars />
      </Block>
    </>
  );
};

export default About;
