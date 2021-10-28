import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Block, ParallaxBlock } from "../../components/Block";
import { EventCard } from "../../components/EventCard";
import getEvents from "./events_data";
import { SearchAppBar } from "../../components/SearchAppBar";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

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

        <SearchAppBar 
          headings={[
            "Past Events", 
            "Future Events", 
            "Trending Events", 
            "My Favorite"
          ]} 
        />

        <Block backgroundColor="#D0CFE2">
          <Grid container spacing={4}>
            {events.map((event) => {
              const [date, month] = event.date.split(' ');
              return (
                <EventCard to={`/event/${event.id}`} image={event.image} key={event.id}>
                  <Grid container spacing={1}>

                    <Grid item xs={2} >
                      <Typography 
                        style={{
                          color: "#6C6AD1",
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: 22,
                        }}
                      >
                        {month.toUpperCase()}
                      </Typography>
                      <Typography 
                        style={{
                          textAlign: "center",
                          fontSize: 22,
                        }}
                      >
                        {date}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2"
                        style={{
                          textAlign: "center",
                          fontWeight: "bold"
                        }}
                      >
                        {event.name}
                      </Typography>
                    </Grid>
                    <Grid 
                      item
                      xs={2} 
                      style={{
                        display: "flex", 
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-end"
                      }}
                    >
                      {/* <div>
                        <IconButton 
                          aria-label="add to favorites" 
                          style={{
                            backgroundColor: "#E2C8E9"
                          }}>
                          <FavoriteIcon color="warning" />
                        </IconButton>
                        <IconButton aria-label="share" style={{backgroundColor: "#E2C8E9"}}>
                          <ShareIcon />
                        </IconButton>
                      </div> */}
                      <div
                        style={{
                          borderRadius: "5px",
                          minHeight: "25px",
                          minWidth: "50px",
                          backgroundColor: "#E2C8E9",
                          padding: '3px',
                          display: 'flex',
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Typography variant="h6" >
                          Free
                        </Typography>
                      </div>
                    </Grid>
                    
                  </Grid>
                </EventCard>
              )}
            )}
          </Grid>
        </Block>
      </main>
    </>
  );
}
