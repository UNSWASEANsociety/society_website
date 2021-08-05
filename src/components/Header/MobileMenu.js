import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SlidingPane from "react-sliding-pane";
import Link from "next/link";

import styles from "./MobileMenu.module.scss";
import { Typography } from "@material-ui/core";

const MobileMenu = ({ links }) => {
  const [paneOpen, setPaneOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          console.log("Open");
          setPaneOpen(true);
        }}
        className={styles.root}
      >
        <MenuIcon fontSize="large" />
      </div>
      <SlidingPane
        closeIcon={<div>x</div>}
        isOpen={paneOpen}
        title="Hey, it is optional pane title.  I can be React component too."
        from="right"
        width="300px"
        onRequestClose={() => {
          console.log("Closed");
          setPaneOpen(false);
        }}
      >
        <hr className={styles.hr_line} />
        <div className={styles.linkGroup}>
          {links.map((link, index) => {
            return (
              <>
                <Link
                  key={index}
                  className={styles.link}
                  href={link.path}
                  passHref
                >
                  <div className={styles.link_text}>
                    <Typography variant="h5" align="center">
                      {link.name}
                    </Typography>
                  </div>
                </Link>
                <hr className={styles.hr_line} />
              </>
            );
          })}
        </div>
      </SlidingPane>
    </>
  );
};

export default MobileMenu;
