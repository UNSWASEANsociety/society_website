import { Typography } from "@material-ui/core/";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { AutoCarousel } from "../../components/Carousel";
import { TypingText } from "../../components/TypingText";
import getEvents from "../Events/events_data";
import About from "./About";
import MissionVision from "./Mission_Vision";
import Purpose from "./Purpose";
import Values from "./Values";

const Home = () => {
  const events = getEvents();

  return (
    <>
      <ParallaxBlock>
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
      <Block backgroundColor="white">
        <MissionVision />
      </Block>
      <Block>
        <Purpose />
      </Block>
      <Block backgroundColor="white">
        <Values />
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Event highlights
        </Typography>
        <AutoCarousel
          items={events.slice(0, 3).map((event) => {
            return {
              image: event.image,
              text: event.name,
            };
          })}
        />
        Check out our latest events
      </Block>
    </>
  );
};

export default Home;
