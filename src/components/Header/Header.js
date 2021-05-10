import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import MobileMenu from "./MobileMenu";


const Header = ({ links }) => {
 
  return (
    <>
      <AppBar position="sticky">
        <Toolbar >
          {/* <CameraIcon /> */}
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
