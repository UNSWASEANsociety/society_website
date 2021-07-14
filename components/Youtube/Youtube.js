import React, { useState } from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";

// import getWidth from "../../utils/getwidth";

export function getWidth() {
    return 800;    
  // return Math.max(
  //   document.body.scrollWidth,
  //   document.documentElement.scrollWidth,
  //   document.body.offsetWidth,
  //   document.documentElement.offsetWidth,
  //   document.documentElement.clientWidth
  // );
}


const Y = ({ videoId }) => {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    const changeWidth = () => {
      setWidth(getWidth());

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
    height: 600,
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onReady}/>;
};

export default Y;
