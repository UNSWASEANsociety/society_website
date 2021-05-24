import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const AutoCarousel = ({ items }) => {
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
    >
      {items.map((item) => {
        return (
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography component="h1" variant="h1" align="center" gutterBottom>
              {item.text}
            </Typography>
          </div>
        );
      })}
    </AwesomeSlider>
  );
};

AutoCarousel.defaultProps = {
  items: [
    {
      image: "https://source.unsplash.com/random",
      text: "One Vision",
    },
    {
      image: "https://source.unsplash.com/random",
      text: "One Identity",
    },
    {
      image: "https://source.unsplash.com/random",
      text: "One Community",
    },
  ],
};

export default AutoCarousel;
