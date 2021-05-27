import React from "react";
import styles from "./Block.module.scss";
import { Container } from "@material-ui/core";
import PropTypes from 'prop-types';

import { Fade } from "react-reveal";

const Block = ({ style = null, backgroundColor, children }) => {
  let color;
  if (backgroundColor === "white" || backgroundColor === "#ffffff") {
    console.log("White background")
    color = "black"
  }
  return (
    <>
      <section style={{ backgroundColor, color,  ...style }}>
        <Container>
          <Fade bottom>
            <div className={styles.innerContent}>{children}</div>
          </Fade>
        </Container>
      </section>
    </>
  );
};

Block.propType = {
  backgroundColor: PropTypes.string
}

export default Block;
