import { Typography } from "@material-ui/core";
import React from "react";
import { AutoCarousel } from "../../components/Carousel";

const Ones = () => {
  return (
    <>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        One Vision. One Identity. One Community.
      </Typography>
      idea: Use caroursel to rotate between the 3 items
      <AutoCarousel />
    </>
  );
};

export default Ones;
