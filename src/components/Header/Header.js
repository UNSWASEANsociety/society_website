import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import React, { useEffect, useState } from "react";
import getWidth from "../../utils/getwidth";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({ links }) => {
  const classes = useStyles();

  const [width, setWidth] = useState(getWidth());
  useEffect(() => {
    const changeWidth = () => {
      setWidth(getWidth());
    };
    // window.addEventListener("resize", changeWidth, true);
    window.addEventListener("resize", changeWidth, true);

    return () => {
      window.removeEventListener("resize", changeWidth, true);
    };
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <nav>
          <Toolbar>
            <CameraIcon />
            <Typography variant="h6" className={classes.title}>
              Blog name
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            {width >= 600 ? (
              <Menu links={links} />
            ) : (
              <MobileMenu links={links} />
            )}
          </Toolbar>
        </nav>
      </AppBar>
    </div>

    // <AppBar position="static">
    //   {/* TODO Temporarily using inline styling to fix colour */}
    //   <Toolbar>
    //     <CameraIcon />
    //     {/* <CameraIcon className={classes.icon} /> */}
    //     <Typography variant="h6" color="inherit" noWrap>
    //       Blog name
    //     </Typography>
    //     {width >= 600 ? <Menu links={links}/> : <MobileMenu links={links} />}
    //   </Toolbar>
    // </AppBar>
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
