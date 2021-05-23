/*eslint-disable*/
// material-ui core components
import { Button, Container, Tooltip } from "@material-ui/core";
import React from "react";

// import {
//   FacebookIcon,
//   LinkedInIcon,
//   InstagramIcon,
//   TwitterIcon,
// } from "@material-ui/icons";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import styles from "./SocialMediaLinks.module.scss"

import { Link } from "react-router-dom";

// instagram: "https://www.instagram.com/aseansoc_unsw/?hl=en",
// facebook: "https://www.facebook.com/ASEANSocUNSW",
// twitter: "https://twitter.com/AseanUnsw",

const socialMedias = [
  {
    component: <LinkedInIcon />,
    highlightMsg: "Follow us on linkedin",
    path: "https://www.linkedin.com/company/unsw-asean-society/",
  },
  {
    component: <InstagramIcon />,
    highlightMsg: "Follow us on Instagram",
    path: "https://www.instagram.com/aseansoc_unsw/?hl=en",
  },
  {
    component: <FacebookIcon />,
    highlightMsg: "Follow us on Facebook",
    path: "https://www.facebook.com/ASEANSocUNSW",
  },
  {
    component: <TwitterIcon />,
    highlightMsg: "Follow us on Twitter",
    path: "https://twitter.com/AseanUnsw",
  },
];

const SocialMediaLinks = (props) => {
  //   const classes = useStyles();

  return (
    <div className={styles.root} >
      {/* Follow us on: */}
     {socialMedias.map(sm => {
       return (
        <Tooltip
        title={sm.highlightMsg}
        placement={"center"}
      >
        <a href={sm.path} className={styles.link}>
          {sm.component}
        </a>
      </Tooltip>
       )
     })}
    </div>
  );
};

SocialMediaLinks.propTypes = {};

export default SocialMediaLinks;
