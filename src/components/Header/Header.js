import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getWidth from "../../utils/getwidth";
import styles from "./Header.module.scss";
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

  const visibleLinks = links.filter((link) => {
    return link.onHeader;
  });

  return (
    <div className={`${classes.root} ${styles.bar}`}>
      <AppBar position="static" style={{ backgroundColor: "#414042" }}>
        <nav>
          <Toolbar>
            <Link to="/">
              <img
                src="/White_logo_04.png"
                alt="UAS logo"
                className={styles.logo}
              />
            </Link>

            {/* <Link to="/" className={styles.homeLink}>
              <Typography variant="h6" className={classes.title}>
                UNSW ASEAN Society
              </Typography>
            </Link> */}
            <Typography variant="h6" className={classes.title}>
              {/* This Typography has to be here for other nav links to be aligned left*/}
            </Typography>
            {width >= 600 ? (
              <Menu links={visibleLinks} />
            ) : (
              <MobileMenu links={visibleLinks} />
            )}
          </Toolbar>
        </nav>
      </AppBar>
    </div>
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
