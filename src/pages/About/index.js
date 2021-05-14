import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { ParallaxBlock, Block } from "../../components/Block";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
    </>
  );
};

export default About;
