/**
 * Page for when user clicks into a specific event/article/blog
 */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useParams } from "react-router-dom";
import { Block, ParallaxBlock } from "../../components/Block";
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
  console.log();
  const selectedEvent = getEvent(id);
  console.log(id);
  console.log(selectedEvent);
  const events = get3Events();
  // TODO events usually have sponsors rather than entire society
  return (
    <>
      <ParallaxBlock
        hasNotch={true}
        // image="/seminar.png"
        image={selectedEvent.image}
        // blur={2}
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
          <Grid item md={12}>
            <Typography component="h2" variant="h3">
              Description
            </Typography>
            <hr />
            <Typography variant="h5" paragraph>
              {selectedEvent.description}
            </Typography>
          </Grid>
          {/* <Grid item md={6}></Grid> */}
        </Grid>
      </Block>
      {selectedEvent.schedule.length !== 0 && (
        <Block>
          <Schedule />
        </Block>
      )}
      {selectedEvent.speaker.length !== 0 && (
        <Block backgroundColor="white">
          <Typography component="h2" variant="h3">
            Speakers
          </Typography>
        </Block>
      )}
      <Block>
        <OtherEvents events={events} />
      </Block>
    </>
  );
};

export default Event;
