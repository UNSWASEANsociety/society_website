import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
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
            <li>
              <Link to={route.path} className={styles.link}>
                {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Typography>
  );
};

export default Links;
