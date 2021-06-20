import { Hidden } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import { HTimeLine } from "../../components/TimeLine";

import getEvents from "./events_data"

export default function Events() {
  const events = getEvents();
  return (
    <>
      <main>
        <ParallaxBlock height="50vh" width="xl">
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Events
            {/* <Hidden mdDown> Timeline</Hidden> */}
          </Typography>
          {/* <Hidden mdDown>
            <HTimeLine />
          </Hidden> */}
        </ParallaxBlock>
        <Block>
          <Grid container spacing={4}>
            {events.map((event) => (
              <Card to={`/event/${event.id}`} image={event.image} key={event.id}>
                <Typography gutterBottom variant="h5" component="h2">
                  {event.name}
                </Typography>
                <Typography>
                  {event.date}
                </Typography>
              </Card>
            ))}
          </Grid>
        </Block>
      </main>
    </>
  );
}
