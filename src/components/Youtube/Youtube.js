import React, { useState } from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";

import getWidth from "../../utils/getwidth";

const Y = ({ videoId }) => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const changeWidth = () => {
      setWidth(getWidth());
      console.log(getWidth())

    };
    window.addEventListener("resize", changeWidth, true);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: width * 0.3 + 100,
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onReady}/>;
};

export default Y;
