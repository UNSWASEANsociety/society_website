import React from "react";
import { push as Menu } from "react-burger-menu";

import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import getWidth from "../../utils/getwidth"
import MenuStyle from "./MobileMenu.module.scss";



const MobileMenu = ({links}) => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "1.5rem",
      top: "1rem",
    },
    bmBurgerBars: {
      background: "#fff",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenu: {
      background: "rgba(34, 40, 49, 0.85)",
      backdropFilter: "blur(12px) saturate(160%)",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
      position: "fixed",
      top: 0,
      bottom: 0,
      height: "100vh",
      width: "100vw",
      left: 0,
      right: 0,
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#fff",
      padding: "0.8em 2.5em",
      width: "100%",
      textAlign: "left",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
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
