import React from "react";
import { AutoCarousel } from "@/components/Carousel";
import { motion } from "framer-motion";
import { Grid, Typography } from "@material-ui/core";

const Ones = () => {
  return (
    <>
      <div style={{overflow:"clip", width:"100%", padding:"0"}}>
        <Grid container>
          <Grid item md={4} xs={12}>
            <motion.div
              // initial={{ x: -3000 }}
              initial="hidden"
              animate={{ x: [3000, 0] }}
              transition={{ duration: 6, times: [0, 0.8] }}
            >
              <Typography variant="h3" align="center" gutterBottom>
                One Vision
              </Typography>
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12}>
            <motion.div
              // initial={{ x: -2500 }}
              initial="hidden"
              animate={{ x: [2500, 0] }}
              transition={{ duration: 4, times: [0, 0.8] }}
            >
              <Typography variant="h3" align="center" gutterBottom>
                One Identity
              </Typography>
            </motion.div>
          </Grid>
          <Grid item md={4} xs={12}>
            <motion.div
              // initial={{ x: -2000 }}
              initial="hidden"
              animate={{ x: [2000, 0] }}
              transition={{ duration: 2, times: [0, 1] }}
            >
              <Typography variant="h3" align="center" gutterBottom>
                One Community
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </div>

      {/* <Typography component="h1" variant="h2" align="center" gutterBottom>
        One Vision. One Identity. One Community.
      </Typography> */}
      {/* idea: Use caroursel to rotate between the 3 items*/}
      {/* Change text colour to yellow, background to blue */}

      {/* <AutoCarousel
        height="20rem"
        items={[
          {
            color: "#374B81",
            text: "One Vision",
          },
          {
            color: "#374B81",
            text: "One Identity",
          },
          {
            color: "#374B81",
            text: "One Community",
          },
        ]}
      />*/}
    </>
  );
};

export default Ones;
