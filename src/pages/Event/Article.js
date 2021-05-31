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
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import PersonIcon from "@material-ui/icons/Person";

import events from "../Events/events_data";

const getEvent = (id) => {
  return events.filter((event) => {
    return event.id == id;
  })[0];
};

const get3Events = () => {
  return events.slice(0, 3);
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Article = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const selectedEvent = getEvent(id);
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
        <Typography component="h1" variant="h2" align="center" gutterBottom>
          {selectedEvent.name}
        </Typography>
      </ParallaxBlock>
      <Block>
        <Grid container>
          <Grid item md={3}>
            <EventIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Date
            </Typography>
            <Typography component="h4" paragraph>
              {selectedEvent.date}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <LocationOnIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Location
            </Typography>
            <Typography component="h4" paragraph>
              {selectedEvent.location}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <AttachMoneyIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Price
            </Typography>
            <Typography component="h4" paragraph>
              {selectedEvent.price}
            </Typography>
          </Grid>
          <Grid item md={3}>
            <PersonIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Speaker
            </Typography>
            <Typography component="h4" paragraph>
              {selectedEvent.speaker}
            </Typography>
          </Grid>
        </Grid>
      </Block>
      <Block backgroundColor="white">
        <Grid container>
          <Grid item md={6}>
            <Typography component="h2" variant="h3">
              Description
            </Typography>
            <Typography variant="h5" paragraph>
              {selectedEvent.description}
            </Typography>
          </Grid>
          <Grid item md={6}>
            {/* <Paper square>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Day 1" />
                <Tab label="Day 2" />
                <Tab label="Day 3" />
              </Tabs>
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={value} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={value} index={2}>
                Item Three
              </TabPanel>
            </Paper> */}
          </Grid>
        </Grid>
      </Block>

      <Block>
        <Typography component="h3" variant="h3" align="center" gutterBottom>
          Checkout other articles
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {events.map((event) => (
              <Card image="https://source.unsplash.com/random">
                <Typography gutterBottom variant="h5" component="h2">
                  {event.name}
                </Typography>
                <Typography>{event.date}</Typography>
              </Card>
            ))}
          </Grid>
        </Container>
      </Block>
    </>
  );
};

export default Article;
