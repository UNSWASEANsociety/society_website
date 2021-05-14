import React from "react";
import Typography from "@material-ui/core/Typography";
import { ParallaxBlock } from "../../components/Block";
import { Block } from "../../components/Block";
import { Grid } from "@material-ui/core";

import {TypingText} from "../../components/TypingText"

const Home = () => {


  return (
    <>
      <ParallaxBlock image="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          <TypingText text="Welcome to the home page!!!" speed={100} typePrompt="|"/>
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Home page
        </Typography>
      </ParallaxBlock>

      <Block style={{backgroundColor: "white"}}>
        <Grid container>
          <Grid item md={5}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              A
            </Typography>
            <Typography variant="h5" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae dictum est. Suspendisse odio nulla, fermentum ac blandit id,
              auctor nec lectus. Donec egestas iaculis arcu eget sagittis. Nulla
              a dolor mollis, egestas diam a, viverra erat. Vestibulum vel arcu
              elit. Aliquam sem tortor, sollicitudin blandit diam vel, sagittis
              consectetur lorem. Fusce tellus nunc, rhoncus sed fringilla sit
              amet, rhoncus sed enim. Donec eleifend sed magna id cursus. Morbi
              aliquam malesuada feugiat. Nam purus felis, viverra id ligula et,
              feugiat vehicula ligula. Curabitur sit amet malesuada felis, in
              tempus libero. Donec sodales ligula sapien, a aliquam mi mattis
              ut. Phasellus eget euismod quam, ac iaculis magna. Phasellus quis
              dignissim enim. Etiam sed magna et enim molestie rutrum. Ut
              faucibus sem tortor, vitae rutrum ex cursus et. Praesent lorem
              metus, maximus ut consectetur quis, vestibulum sed risus. Quisque
              ac mi mi. Quisque efficitur gravida metus, ut finibus est
            </Typography>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item md={5}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              T
            </Typography>
            <Typography variant="h5" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae dictum est. Suspendisse odio nulla, fermentum ac blandit id,
              auctor nec lectus. Donec egestas iaculis arcu eget sagittis. Nulla
              a dolor mollis, egestas diam a, viverra erat. Vestibulum vel arcu
              elit. Aliquam sem tortor, sollicitudin blandit diam vel, sagittis
              consectetur lorem. Fusce tellus nunc, rhoncus sed fringilla sit
              amet, rhoncus sed enim. Donec eleifend sed magna id cursus. Morbi
              aliquam malesuada feugiat. Nam purus felis, viverra id ligula et,
              feugiat vehicula ligula. Curabitur sit amet malesuada felis, in
              tempus libero. Donec sodales ligula sapien, a aliquam mi mattis
              ut. Phasellus eget euismod quam, ac iaculis magna. Phasellus quis
              dignissim enim. Etiam sed magna et enim molestie rutrum. Ut
              faucibus sem tortor, vitae rutrum ex cursus et. Praesent lorem
              metus, maximus ut consectetur quis, vestibulum sed risus. Quisque
              ac mi mi. Quisque efficitur gravida metus, ut finibus est
            </Typography>
          </Grid>
        </Grid>
      </Block>
      <Block>
        {/* <h1>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
        </h1> */}
        <Grid container>
          <Grid item md={3}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              This is a pretty good picture yeah?
              <br/>- martin luther king
            </Typography>
          </Grid>
          <Grid item md = {1} >

          </Grid>
          <Grid item md={8}>
            <img
              src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
              width="100%"
            />
          </Grid>
        </Grid>
      </Block>
    </>
  );
};

export default Home;
