import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";

const IconSummary = ({ date, location, price, speaker }) => {
  console.log(speaker);
  return (
    <>
      <Grid container>
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <EventIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Date
            </Typography>
            <Typography component="h4" paragraph>
              {date.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <LocationOnIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Location
            </Typography>
            <Typography component="h4" paragraph>
              {location}
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <AttachMoneyIcon fontSize="large" />
            <Typography component="h2" variant="h5">
              Price
            </Typography>
            <Typography component="h4" paragraph>
              {price.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={3} xs={6}>
          <Typography align="center">
            <PersonIcon fontSize="large" />

            <Typography component="h2" variant="h5">
              Speaker
            </Typography>
            <Typography component="h4" paragraph>
              {speaker.length ? speaker.join(", ") : "None"}
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default IconSummary;
