import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import MobileMenu from "./MobileMenu";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { Link } from "react-router-dom";

const Header = ({ links }) => {
  return (
    <>
      <AppBar position="sticky">
        {/* TODO Temporarily using inline styling to fix colour */}
        <Toolbar style={{ backgroundColor: "black" }}>
          <CameraIcon />
          {/* <CameraIcon className={classes.icon} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Blog name
          </Typography>
        </Toolbar>
        <MobileMenu links={links} />
      </AppBar>
    </>
  );
};

Header.defaultProps = {
  links: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Teams", path: "/teams" },
  ],
};

export default Header;
