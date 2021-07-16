import { Typography } from "@material-ui/core";
import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
import Link from "next/link";

import styles from "./Menu.module.scss";

const Menu = ({ links }) => {
  // const { pathname } = useLocation();
  return (
    <ul className={styles.nav_list}>
      {links.map((link) => {
        return (
          <li className={styles.nav_item} key="">
            <Link
              href={link.path}
              passHref
            >
              <Typography>
                {link.name}
              </Typography>
            </Link>
          </li>
        );
        {/* return (
          <li className={styles.nav_item}>
            <NavLink
              to={link.path}
              activeClassName={styles.active_link}
              isActive={ () => link.path === pathname}
              className={styles.link}
            >
              <Typography variant="h6">{link.name}</Typography>
            </NavLink>
          </li>
        ); */}
      })}
    </ul>
  );
};

export default Menu;
