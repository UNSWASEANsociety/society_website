import { Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const AutoCarousel = ({ items, height }) => {
  const [curr, setCurr] = useState(0);

  const incCurr = useCallback(() => {
    setCurr((prev) => {
      return (prev + 1) % items.length;
    });
  }, [items]);

  useEffect(() => {
    const intervalId = setInterval(incCurr, 5000);
    return () => clearInterval(intervalId);
  }, [incCurr]);
  return (
    <AwesomeSlider
      buttons={false}
      bullets={false}
      infinite={true}
      selected={curr}
      style={{height: height}}
    >
      {items.map((item, i) => {
        let style = {
          height: "100%",
          width: "100%",
          // backgroundImage: `url(${item.image})`,
          // backgroundColor: "blue",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        };
        if (item.color) {
          style.backgroundColor = item.color;
        } else {
          style.backgroundImage = `url(${item.image})`;
        }
        return (
          <div style={style} key={i}>
            <Typography component="h1" variant="h2" align="center" gutterBottom>
              {item.text}
            </Typography>
          </div>
        );
      })}
    </AwesomeSlider>
  );
};

export default AutoCarousel;
