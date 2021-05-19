/**
 * Documentation:
 * https://www.npmjs.com/package/react-horizontal-timeline
 */
import React, { useState } from "react";
import HorizontalTimeline from "react-horizontal-timeline";

const HT = () => {
  const VALUES = [
    "2000-12-12",
    "2000-12-13",
    "2000-12-14",
    "2000-12-16",
    "2001-12-14",
  ];

  const [value, setValue] = useState(0);
  //   const [previous, setPrevious] = useState(0);

  return (
    <div style={{ width: "80%", height: "100px", margin: "0 auto" }}>
      <HorizontalTimeline
        index={value}
        indexClick={(index) => {
          //   setPrevious(value);
          setValue(index);
        }}
        values={VALUES}
      />
    </div>
  );
};

export default HT;
