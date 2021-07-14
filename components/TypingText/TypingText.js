import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TypingText = ({ text, speed, typePrompt }) => {
  const [title, setTitle] = useState("");

  // Set finished to true to stop interval
  const [intervalStatus, setIntervalStatus] = useState({
    intervalNum: -1,
    finished: false,
  });

  useEffect(() => {
    function* titleGenerator() {
      // Generator which returns one character of the text at a time
      const title = text;
      let i = 0;
      for (; i < title.length; i++) yield title[i];
    }
    const titleGen = titleGenerator();

    const writeTitle = () => {
      const nextLetter = titleGen.next();

      // Enters if statement when text is all typed out
      if (nextLetter.done) {
        setTitle((prevTitle) => {
          return prevTitle + " ";
        });

        // stop interval after finsihed typing out
        setIntervalStatus((prevStatus) => {
          const newStatus = { ...prevStatus, finished: true };
          return newStatus;
        });
        return;
      }
      setTitle((prevTitle) => {
        return prevTitle + nextLetter.value;
      });
    };

    const intervalNum = setInterval(writeTitle, speed);

    // Save the returned output of setInterval so that the interval could 
    // be cleared outside current scope 
    setIntervalStatus((prevStatus) => {
      const newStatus = { ...prevStatus, intervalNum: intervalNum };
      return newStatus;
    });

    // cleanup function
    return () => {
      clearInterval(intervalNum);
    };
  }, [text, speed]);

  if (intervalStatus.finished) {
    clearInterval(intervalStatus.intervalNum);
  }

  return (
    <>
      {title}
      {typePrompt}
    </>
  );
};

TypingText.defaultProps = {
  text: "Text",
};

TypingText.propTypes = {
  text: PropTypes.string,
};

export default TypingText;
