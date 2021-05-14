import React from "react";
import { push as Menu } from "react-burger-menu";
import { useState } from "react";
import { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import getWidth from "../../utils/getwidth"
import MenuStyle from "./MobileMenu.module.scss";



const MobileMenu = ({links}) => {
  // const [width, setWidth] = useState(getWidth());
  // useEffect(() => {
  //   const changeWidth = () => {
  //     setWidth(getWidth());
  //   };
  //   // window.addEventListener("resize", changeWidth, true);
  //   window.addEventListener("resize", changeWidth, true);

  //   return () => {
  //     window.removeEventListener("resize", changeWidth, true);
  //   };
  // }, []);

  const styles = {
    bmBurgerButton: {
      position: "fixed", // have to make this fixed for some reason
      width: "36px",
      height: "30px",
      left: getWidth() - 50 + "px",
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
    <Menu right styles={styles} customBurgerIcon={<MenuIcon />}>
      {links.map((link, index) => {
        return (
          <Link 
            key={index}
            className={MenuStyle.link}
            // activeClassName={MenuStyle.active_link}
            to={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </Menu>
  );
};

export default MobileMenu;
