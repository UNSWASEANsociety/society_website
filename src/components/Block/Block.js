import React from "react";
import styles from "./Block.module.scss";
import { Container } from "@material-ui/core";

const Block = ({ style=null, children }) => {
  return (
    <>
      <section className={styles.root} style={style}>
        <Container>
            <div className={styles.innerContent}>
            {children}
            </div>
        </Container>
      </section>
    </>
  );
};

export default Block;
