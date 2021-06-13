/**
 * Page for when user clicks into a specific event/article/blog
 */
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import getEvents from "../Events/events_data";
import IconSummary from "./IconSummary";
import OtherEvents from "./OtherEvents";
import Schedule from "./Schedule";

const getEvent = (id) => {
  return getEvents().filter((event) => {
    return event.id.toString() === id;
  })[0];
};

const get3Events = () => {
  return getEvents().slice(0, 3);
};

const Event = () => {
  const { id } = useParams();

  const selectedEvent = getEvent(id);
  console.log(id);
  console.log(selectedEvent);
  const events = get3Events();
  return (
    <>
      <ParallaxBlock
        hasNotch={true}
        image="/seminar.png"
        style={{
          position: "absolute",
          width: "1500px",
          height: "722px",
          left: "0px",
          top: "32px",
        }}
      >
        <Typography component="h1" variant="h3" align="center" gutterBottom>
          {selectedEvent.name}
        </Typography>
      </ParallaxBlock>
      <Block>
        <IconSummary
          date={selectedEvent.date}
          location={selectedEvent.location}
          price={selectedEvent.price}
          speaker={selectedEvent.speaker}
        />
      </Block>
      <Block backgroundColor="white">
        <Grid container>
          <Grid item md={6}>
            <Typography component="h2" variant="h3">
              Description
            </Typography>
            <hr />
            <Typography variant="h5" paragraph>
              {selectedEvent.description}
            </Typography>
          </Grid>
          <Grid item md={6}></Grid>
        </Grid>
      </Block>
      <Block>
        <Schedule />
      </Block>
      <Block backgroundColor="white">
        <Typography component="h2" variant="h3">
          Speakers
        </Typography>
      </Block>
      <OtherEvents events={events} />
      <Block></Block>
    </>
  );
};

export default Event;

// export {default} from "./Article"
