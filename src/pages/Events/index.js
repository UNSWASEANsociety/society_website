import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useState, useMemo } from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { Card } from "../../components/Card";
import { EventsNavBar } from "../../components/EventsNavBar";
import { filterEvents, sortEventsByDate } from "../../utils/eventFilters";
import getEvents from "./events_data";


export default function Events() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allEvents = getEvents();

  const filteredEvents = useMemo(() => {
    const filtered = filterEvents(allEvents, activeFilter);
    return sortEventsByDate(filtered, activeFilter === "upcoming");
  }, [allEvents, activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

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

        <EventsNavBar
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        <Block>
          <Grid container spacing={4}>
            {filteredEvents.map((event) => (
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

          {filteredEvents.length === 0 && (
            <Typography
              variant="h6"
              align="center"
              style={{
                opacity: 0.7,
                marginTop: "2rem",
                fontStyle: "italic"
              }}
            >
              No {activeFilter === "all" ? "" : activeFilter} events found.
            </Typography>
          )}
        </Block>
      </main>
    </>
  );
}
