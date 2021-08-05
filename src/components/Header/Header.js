import { AppBar, Hidden, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import Menu from "./Menu";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const getWidth = () => {
  return 1000;
};

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
  //   .logo {
  //     margin: 0.5rem 0;
  //     width: 6rem;
  // }
  return (
    <div className={`${classes.root} ${styles.bar}`}>
      {/* <AppBar position="absolute" color="transparent"> */}
      <AppBar
        position="absolute"
        style={{ backgroundColor: "#414042", zIndex: 1 }}
      >
        <nav>
          <Toolbar>
            <Link href="/" passHref>
              <span className={styles.logo}>
                <Image
                  src="/White_logo_04.png"
                  alt="UAS logo"
                  width={170.25}
                  height={78}
                  quality={90}
                />
              </span>
            </Link>
            <Typography variant="h6" className={classes.title}>
              {/* This Typography has to be here for other nav links to be aligned left*/}
            </Typography>
            <Hidden smDown>
              <Menu links={visibleLinks} />
            </Hidden>
            <Hidden mdUp>
              <MobileMenu links={visibleLinks} />
            </Hidden>
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
