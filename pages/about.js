import Typography from "@material-ui/core/Typography";
import React from "react";
import "react-awesome-slider/dist/styles.css";
import { Block, ParallaxBlock } from "@/components/Block";
import { Youtube } from "@/components/Youtube";
import AboutASEAN from "@/page_sections/About/AboutASEAN";
import ASEANCommunity from "@/page_sections/About/ASEANCommunity";
import ASEANPillars from "@/page_sections/About/ASEANPillars";
import Ones from "@/page_sections/About/Ones";
import { Title } from "@/components/Dynamic_Typography"
import { Footer } from "@/components/Footer";
import routes from "@/constants/routes"
import { Header } from "@/components/Header";
import Head from "next/head"
const About = () => {
  return (
    <>
      <Head>
        <title>About | UNSW ASEAN Society</title>
        <meta name="description" content="Put your description here."/>
      </Head>
      <Header links={routes} />
      <ParallaxBlock height="93vh">
        <Title text="WE BELIEVE IN EVERYTHING ASEAN..." />
      </ParallaxBlock>
      {/* <TestCarousel /> */}
      <Block fadeIn={false}>
        <Ones />
      </Block>
      <Block backgroundColor="white">
        <AboutASEAN />
      </Block>
      <Block>
        <Typography style={{ color: "#FFC956" }} component="h1" variant="h2" align="center" gutterBottom>
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
      <Footer />
    </>
  );
};

export default About;
