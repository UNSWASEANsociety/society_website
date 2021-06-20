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
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  const events = getEvents();

  return (
    <>
      <ParallaxBlock>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          {/* <TypingText
            text="Welcome to UNSW ASEAN Society"
            speed={50}
            typePrompt="|"
          /> */}
          {/* Source: https://www.npmjs.com/package/react-typing-effect */}
          <ReactTypingEffect
            typingDelay={1000}
            cursor="_"
            eraseDelay={60 * 60 * 24}
            text="WELCOME TO | UNSW ASEAN SOCIETY"
            cursorRenderer={(cursor) => <>{cursor}</>}
            displayTextRenderer={(text, i) => {
              const character_renderer = (text) => (
                <>
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span
                        key={key}
                        // style={i%2 === 0 ? { color: 'magenta'} : {}}
                      >
                        {char}
                      </span>
                    );
                  })}
                </>
              );
              if (text.indexOf("|") !== -1) {
                const sentences = text.split("|");
                return (
                  <>
                    <Typography
                      component="h1"
                      variant="h3"
                      align="center"
                      gutterBottom
                    >
                      {character_renderer(sentences[0])}
                    </Typography>
                    <Typography
                      variant="h2"
                      align="center"
                      gutterBottom
                    >
                      {character_renderer(sentences[1])}
                    </Typography>
                  </>
                );
              }
              return (
                <Typography
                  component="h1"
                  variant="h3"
                  align="center"
                  gutterBottom
                >
                  {character_renderer(text)}
                </Typography>
              );
            }}
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
