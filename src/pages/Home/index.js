import React from "react";
import Typography from "@material-ui/core/Typography";
import { ParallaxBlock } from "../../components/Block";
import { Block } from "../../components/Block";

const Home = () => {
  return (
    <>
      <ParallaxBlock
        image="https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      >
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Home
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Home page
        </Typography>
      </ParallaxBlock>
      <Block>
        {/* <h1>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
        </h1> */}
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          About
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          This is decent
        </Typography>
        <img src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""/>
      </Block>
    </>
  );
};

export default Home;
