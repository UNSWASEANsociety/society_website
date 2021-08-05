import React from "react";
import styles from "./Block.module.scss";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { dynamic } from "next";
// import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../FadeInWhenVisible";

const Block = ({ style = null, backgroundColor, children, fadeIn = true }) => {
  let color;
  if (backgroundColor === "white" || backgroundColor === "#ffffff") {
    color = "#414042";
  }
  let content;
  if (fadeIn) {
    content = (
      // <Fade bottom>
      <FadeInWhenVisible>
        <motion.div className={styles.innerContent}>{children}</motion.div>
      </FadeInWhenVisible>
      // </Fade>
    );
  } else {
    content = <div className={styles.innerContent}>{children}</div>;
  }

  return (
    <>
      <section style={{ backgroundColor, color, ...style }}>
        <Container>{content}</Container>
      </section>
    </>
  );
};

Block.propType = {
  backgroundColor: PropTypes.string,
};

export default Block;
