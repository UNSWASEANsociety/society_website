/**
 * Documentation:
 * https://www.npmjs.com/package/react-parallax
 */
import Container from "@material-ui/core/Container";
import React from "react";
import { Parallax } from "react-parallax";

import styles from "./ParallaxBlock.module.scss";

const ParallaxBlock = ({
  image = "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  height = "75vh",
  width = "xl",
  hasNotch,
  children,
}) => {
  console.log("has notch=>", hasNotch && styles.notch);
  return (
    <Parallax
      bgImage={image}
      bgImageSizes=""
      strength={500}
      className={hasNotch && styles.notch}
    >
      <div style={{ height }}>
        <div className={styles.inner}>
          <Container maxWidth={width} minHeight>
            {children}
          </Container>
        </div>
      </div>
    </Parallax>
  );
};

export default ParallaxBlock;
