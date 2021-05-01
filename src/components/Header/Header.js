import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { push as Menu } from "react-burger-menu";
import { useState } from "react";
import { useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  const [width, setWidth] = useState(window.screen.availWidth);
  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.screen.availWidth);
    };
    window.addEventListener("resize", changeWidth, true);
    
    return () => {
      window.removeEventListener("resize", changeWidth, true);
    };
  }, []);

  const styles = {
    bmBurgerButton: {
      position: "fixed", // have to make this fixed for some reason
      width: "36px",
      height: "30px",
      left: width - 50 + "px",
      top: "1rem",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {/* <CameraIcon /> */}
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
        <Menu
          right
          styles={styles}
          customBurgerIcon={<MenuIcon/>}
        >
          <a id="home" href="/">
            Home
          </a>
          <a id="about" href="/about">
            About
          </a>
          <a id="teams" href="/teams">
            teams
          </a>
        </Menu>
      </AppBar>
    </>
  );
};

export default Header;
