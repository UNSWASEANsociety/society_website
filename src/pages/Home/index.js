import {
  Typography
} from "@material-ui/core/";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { AutoCarousel } from "../../components/Carousel";
import { TypingText } from "../../components/TypingText";
import About from "./About";
import MissionVision from "./Mission_Vision";
import Purpose from "./Purpose";
import Values from "./Values";


const Home = () => {
  return (
    <>
      <ParallaxBlock >
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
      {/* <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Event highlights
        </Typography>
        <AutoCarousel
          items={[
            {
              image: "https://s3-alpha-sig.figma.com/img/6b36/c94f/ad4aa6d21bd5c58cb8b32b30edffa5e1?Expires=1623024000&Signature=XiwRQxZmbpqMo-DwiEvpQWEg8DCpcd~l1S3RvDSRFH6eRFLgkdJbl5ylVwv27pfD0OrdCgq5WGYRZuu~vUU~XJvhjYAf8fwa8J2WL3~nA0PmEwEmHhk9nXHL5CPjfKvpNv6kcv~r9NCwwHTnEwsoTtb4hqchLqnSp~hVAAHEvDiwhWMvLuJhsSmBhd7~nhbB3lgfJ1xJ8q9DmXx6LsIQcl-DdJ1LkyY6PsqMoXziSdGgP~41xDFEM7bHZxRd2XoBqXfBqiJxBqbishcJAAqLAcp4UJv9YHEaJSQs2151LuURCzRHjOXFVGWFWpOTxtZ-XLz6I6xJKLSmM7fQFZRdWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              text: "Event 1",
            },
            {
              image: "https://s3-alpha-sig.figma.com/img/6b36/c94f/ad4aa6d21bd5c58cb8b32b30edffa5e1?Expires=1623024000&Signature=XiwRQxZmbpqMo-DwiEvpQWEg8DCpcd~l1S3RvDSRFH6eRFLgkdJbl5ylVwv27pfD0OrdCgq5WGYRZuu~vUU~XJvhjYAf8fwa8J2WL3~nA0PmEwEmHhk9nXHL5CPjfKvpNv6kcv~r9NCwwHTnEwsoTtb4hqchLqnSp~hVAAHEvDiwhWMvLuJhsSmBhd7~nhbB3lgfJ1xJ8q9DmXx6LsIQcl-DdJ1LkyY6PsqMoXziSdGgP~41xDFEM7bHZxRd2XoBqXfBqiJxBqbishcJAAqLAcp4UJv9YHEaJSQs2151LuURCzRHjOXFVGWFWpOTxtZ-XLz6I6xJKLSmM7fQFZRdWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              text: "Event 2",
            },
          ]}
        ></AutoCarousel>
      </Block> */}
    </>
  );
};

export default Home;
