import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const AutoCarousel = ({ items, height }) => {
  const [curr, setCurr] = useState(0);

  const incCurr = () => {
    setCurr((prev) => {
      console.log(prev);
      return (prev + 1) % items.length;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(incCurr, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <AwesomeSlider
      buttons={false}
      bullets={false}
      infinite={true}
      selected={curr}
      style={{height: height}}
    >
      {items.map((item) => {
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
          <div style={style}>
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
