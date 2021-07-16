import { Grid, Typography } from "@material-ui/core/";
import React from "react";
import styles from "./Purpose.module.scss";


const Purpose = () => {
  // Using https://codepen.io/ines/pen/qXrYQO for list
  // TODO extract to own component
  // Or use something else 
  const items = [
    // subheading semi bold gill sans
    // body is normal gill sans
    {
      heading: "Provide",
      text: "Provide a platform to promote multiculturalism and integrate Southeast Asian culture with the wider community",
    },
    {
      heading: "Create",
      text: "Create awareness on current political, social, economic and environmental issues pertaining to South East Asian region",
    },
    {
      heading: "Enrich",
      text: "Enrich South East Asian cultural and social literacy",
    },
    {
      heading: "Instigate",
      text: "Instigate stronger bonds between different nations that encompasses ASEAN",
    },
  ];

  return (
    <>
      <Typography style={{ color: "#FFC956" }} component="h1" variant="h2" align="center" gutterBottom>
        PURPOSE
      </Typography>
      <hr />
      <br />

      <ol className={styles.list}>
        <Grid container>
          {items.map((item, i) => {
            return (
              <li key={i}>
                <Typography variant="h3" className={styles.headline} paragraph>
                  {item.heading}
                </Typography>
                <Typography variant="h5" paragraph>
                  {item.text}
                </Typography>
              </li>
            );
          })}
        </Grid>
      </ol>

      {/* <Typography variant="h5" paragraph>
        1. Provide a platform to promote multiculturalism and integrate
        Southeast Asian culture with the wider community
        <br />
        2. Create awareness on current political, social, economic and
        environmental issues pertaining to South East Asian region
        <br />
        3. Enrich South East Asian cultural and social literacy
        <br />
        4. Instigate stronger bonds between different nations that encompasses
        ASEAN
      </Typography> */}
    </>
  );
};

export default Purpose;
