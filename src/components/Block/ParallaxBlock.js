import Container from "@material-ui/core/Container";
import React from "react";
import { Parallax } from "react-parallax";

import styles from "./ParallaxBlock.module.scss"

const ParallaxBlock = ({ image, height, width, hasNotch, children }) => {
  console.log("has notch=>", hasNotch && styles.notch)
  return (
    <Parallax bgImage={image} strength={500} className={hasNotch && styles.notch}>
      <div style={{ height }}>
        <div className={styles.inner}>
          <Container maxWidth={width}>
            {/* <Typography component="h1" variant="h2" align="center" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography> */}
            {children}
          </Container>
        </div>
      </div>
    </Parallax>
  );
};

ParallaxBlock.defaultProps = {
  image:
    "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  height: "75vh",
  width: "xl",
};

export default ParallaxBlock;
