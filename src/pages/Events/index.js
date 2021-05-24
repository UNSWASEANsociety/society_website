import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import { HTimeLine } from "../../components/TimeLine";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Events() {
  return (
    <React.Fragment>
      <main>
        <ParallaxBlock height="50vh" width="xl">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Event Timeline
          </Typography>
          <HTimeLine />
        </ParallaxBlock>
        <Block style={{ backgroundColor: "white" }}>
            TODO: Some search fields here
        </Block>
        <Block>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Card to="/article/5" image="https://source.unsplash.com/random">
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </Card>
            ))}
          </Grid>
        </Block>
      </main>
    </React.Fragment>
  );
}
