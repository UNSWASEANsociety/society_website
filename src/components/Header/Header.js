import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getWidth from "../../utils/getwidth";
import styles from "./Header.module.scss";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";


const Header = ({ links }) => {

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
    <div className={styles.headerGlass}>
      <Link to="/">
        <img
          src="/White_logo_04.png"
          alt="UAS logo"
          className={styles.logo}
        />
      </Link>
      <div style={{ flex: 1 }}></div>
      {width >= 600 ? (
        <Menu links={visibleLinks} />
      ) : (
        <MobileMenu links={visibleLinks} />
      )}
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
