/**
 * Source:
 * https://github.com/RayyanX95/background-video
 */
import React from "react";

import styles from "./VideoBlock.module.scss";

const VideoBlock = ({ video = "/UAC.mp4", children }) => {
  return (
    <div className={styles.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={styles.Video}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default VideoBlock;
