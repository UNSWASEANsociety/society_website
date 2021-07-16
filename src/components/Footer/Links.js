import Typography from "@material-ui/core/Typography";
import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

import routes from "../../constants/routes";

import styles from "./Links.module.scss";

const Links = () => {
  const visibleRoute = routes.filter((route) => {
    return route.onFooter;
  });

  return (
    <Typography variant="h6" align="center" gutterBottom>
      <ul className={styles.linkGroup}>
        {visibleRoute.map((route) => {
          return (
            <li key="">
              <Link href={route.path}>
                <a  className={styles.link}>
                  {route.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Typography>
  );
};

export default Links;
