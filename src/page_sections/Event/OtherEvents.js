import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Card } from "@/components/Card";

const OtherEvents = ({ events }) => {
  return (
    <>
      <Typography component="h3" variant="h3" align="center" gutterBottom>
        Checkout other articles
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {events.map((event) => (
            <Card to={`/event/${event.id}`} image={event.image}>
              <Typography gutterBottom variant="h5" component="h2">
                {event.name}
              </Typography>
              <Typography>{event.date}</Typography>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default OtherEvents;
