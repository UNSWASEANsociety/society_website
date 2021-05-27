import React from "react";
import styles from "./Block.module.scss";
import { Container } from "@material-ui/core";

import { Fade } from "react-reveal";

const Block = ({ style = null, backgroundColor, children }) => {
  return (
    <>
      <section style={{ backgroundColor, ...style }}>
        <Container>
          <Fade bottom>
            <div className={styles.innerContent}>{children}</div>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export default Block;
