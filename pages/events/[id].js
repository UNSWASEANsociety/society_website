/**
 * Page for when user clicks into a specific event/article/blog
 */
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
// import { useParams } from "react-router-dom";
import { Block, ParallaxBlock } from "@/components/Block";
import getEvents from "@/page_sections/Events/events_data";
import IconSummary from "@/page_sections/Event/IconSummary";
import OtherEvents from "@/page_sections/Event/OtherEvents";
import Schedule from "@/page_sections/Event/Schedule";
import { Footer } from "@/components/Footer";

import { useRouter } from "next/router";
import routes from "@/constants/routes";
import { Header } from "@/components/Header";
import backend_route from "@/constants/backend_route";

export async function getServerSideProps(context) {
  // TODO
  const res = await fetch(
    `${backend_route}/events/list?Start_index=0&End_index=5`
  );
  const data = await res.json();
  const { events } = data;
  console.log(data);
  return {
    props: {
      events,
    }, // will be passed to the page component as props
  };
}

const getEvent = (id) => {
  return getEvents().filter((event) => {
    return event.id.toString() === id;
  })[0];
};

const get3Events = () => {
  return getEvents().slice(0, 3);
};

const Event = () => {
  const router = useRouter();
  const { id } = router.query;

  const selectedEvent = getEvent(id);
  const events = get3Events();
  // TODO events usually have sponsors rather than entire society
  if (!selectedEvent) {
    return <></>;
  }
  return (
    <>
      <Header links={routes} />
      <ParallaxBlock
        hasNotch={true}
        image="/seminar.png"
        // image={selectedEvent.image}
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
      <Footer />
    </>
  );
};

export default Event;
