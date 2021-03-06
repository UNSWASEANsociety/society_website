import { Typography } from "@material-ui/core";
import React from "react";
import { Accordion } from "../../components/Accordion";
import { Block, ParallaxBlock } from "../../components/Block";

const FAQ = () => {
  return (
    <>
      <ParallaxBlock height="50vh" width="xl">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Frequently asked questions.
        </Typography>
      </ParallaxBlock>
      <Block>
        <Accordion />
      </Block>
    </>
  );
};

export default FAQ;
