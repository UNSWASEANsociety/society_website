import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import { HTimeLine } from "../../components/TimeLine";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <React.Fragment>
      {/* <CssBaseline /> */}
      <main>
        <ParallaxBlock>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don&apos;t simply skip over it entirely.
          </Typography>
        </ParallaxBlock>
        <Block style={{backgroundColor: "white"}}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Timeline
          </Typography>
          <HTimeLine />

        </Block>
        <Block>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Card image="https://source.unsplash.com/random">
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

        <ParallaxBlock image="https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80u">
          <h1>Image</h1>
        </ParallaxBlock>
      </main>
    </React.Fragment>
  );
}
