import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Block, ParallaxBlock } from "@/components/Block";
import { Card } from "@/components/Card";
import getEvents from "@/page_sections/Events/events_data";
import { Footer } from "@/components/Footer";
import routes from "@/constants/routes"
import { Header } from "@/components/Header";
import backend_route from "@/constants/backend_route";


export async function getServerSideProps(context) {
  // TODO 
  const res = await fetch(`${backend_route}/events/list?Start_index=0&End_index=5`);
  const data = await res.json();
  const {events} = data;
  console.log(data);
  return {
    props: {
      events
    }, // will be passed to the page component as props
  }
}

export default function Events({events}) {
  // console.log(props);
  // const events = getEvents();
  console.log(events)
  return (
    <>
      <Header links={routes} />

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
              <Card to={`/events/${event.id}`} image={event.image} key={event.e_id}>
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
      <Footer/>
    </>
  );
}
