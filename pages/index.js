import Head from "next/head";

import { Button, Typography, Grid } from "@material-ui/core/";
import React from "react";
import Link from "next/link";
import ReactTypingEffect from "react-typing-effect";
import { Block, ParallaxBlock, VideoBlock } from "@/components/Block";
import { AutoCarousel } from "@/components/Carousel";
import getEvents from "@/page_sections/Events/events_data";
import About from "@/page_sections/Home/About";
import MissionVision from "@/page_sections/Home/Mission_Vision";
import Purpose from "@/page_sections/Home/Purpose";
import Values from "@/page_sections/Home/Values";
import { Title } from "@/components/Dynamic_Typography";

import routes from "@/constants/routes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import dynamic from "next/dynamic";

const Home = () => {
  const Map = dynamic(
    () => import("@/components/Map"), // replace '@components/map' with your component's location
    {
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );

  const events = getEvents();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="We, UNSW ASEAN Society (ASEANsoc), are a community-based non-for-profit organisation that aims to facilitate discussions on issues occurring in the Southeast Asian region. We aim to educate and empower our members through providing opportunities for them to learn and grow whether it may be through seminars, events or general initiatives."
        />
      </Head>
      <Header links={routes} />
      <VideoBlock>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          {/* <TypingText
            text="Welcome to UNSW ASEAN Society"
            speed={50}
            typePrompt="|"
          /> */}
          {/* Source: https://www.npmjs.com/package/react-typing-effect */}
          <ReactTypingEffect
            typingDelay={100}
            cursor=" "
            speed={100}
            eraseDelay={60 * 60 * 24 * 1000}
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
                    <Title
                      text={character_renderer(sentences[0])}
                      component="h2"
                    />
                    <Title
                      text={character_renderer(sentences[1])}
                      component="h1"
                    />
                  </>
                );
              }
              return <Title text={character_renderer(text)} component="h2" />;
            }}
          />
        </Typography>
      </VideoBlock>

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
              text: "", // event.name
            };
          })}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/events">Check out our latest events</Link>
          {/* <Button
            component={Link}
            href="/events"
            variant="outlined"
            color="inherit"
          >
            Check out our latest events
          </Button> */}
        </div>
      </Block>
      <div style={{ padding: "5rem" }}>
        <Grid container>
          <Grid items xs={6}>
            <Typography component="h2" variant="h2">
              Visit Us
            </Typography>
            <Typography component="p" variant="h4">
              Location <br />
              University of New South Wales
              <br />
              Kensington, Sydney, NSW, 2052
            </Typography>
          </Grid>
          <Grid items xs={6}>
            <Map />
          </Grid>
        </Grid>
      </div>

      <Footer />
    </>
  );
};

export default Home;
