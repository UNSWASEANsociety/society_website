import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "react-awesome-slider/dist/styles.css";
import { Accordion } from "../../components/Accordion";
import { AsortedList } from "../../components/AsortedList";
import { Block } from "../../components/Block";
import { TimeLine } from "../../components/TimeLine";
import { Youtube } from "../../components/Youtube";


const TestPage = () => {
  return (
    <>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Some accordion
        </Typography>
        <Accordion />
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Some timeline library
        </Typography>
        <TimeLine />
      </Block>
      <Block>
        <AsortedList />
      </Block>
      <Block>
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          Youtube Video
        </Typography>
        <Youtube videoId="dQw4w9WgXcQ" />
      </Block>
      <Block style={{ backgroundColor: "white" }}>
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
              <br />- martin luther king
            </Typography>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={8}>
            <img
              src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
              alt=""
              width="100%"
            />
          </Grid>
        </Grid>
      </Block>

      <Block>
        <Grid container>
          <Grid item md={8}>
            <img src="https://source.unsplash.com/random" alt="" width="100%" />
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={3}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              About
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              This is a pretty good picture yeah?
              <br />- Author 2
            </Typography>
          </Grid>
        </Grid>
      </Block>
    </>
  );
};

export default TestPage;
