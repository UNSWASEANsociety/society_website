import { Container } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
// import Fade from "react-reveal/Fade";
import Links from "./Links";
import SocialMediaLinks from "./SocialMediaLinks";
import Image from "next/image";

import styles from "./Footer.module.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        UNSW ASEAN SOCIETY
      </Link>{" "}
      {new Date().getFullYear()} - All rights reserved
      {"."}
    </Typography>
  );
}

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.background.paper,
//     color: "black",
//     padding: theme.spacing(4),
//   },
// }));

const Footer = () => {
  // const classes = useStyles();
  // TODO use logo wash-04.png at bottom of footer
  return (
    <>
      {/* <footer className={classes.footer}> */}
      <footer className={styles.footer}>
        <Container>
          <Links />
          <Copyright />
          <SocialMediaLinks />
          <div className={styles.center_container}>
            <Link href="/" passHref>
              <Image
                src="/Logo_Wash_04.png"
                alt="society logo"
                width="300%"
                height="200%"
                className={styles.logo}
              />
            </Link>
            {/* <img
                src="/Logo_Wash_04.png"
                alt="society logo"
                className={styles.logo}
              /> */}
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
