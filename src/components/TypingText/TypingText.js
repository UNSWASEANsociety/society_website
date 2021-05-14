import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const TypingText = ({text, speed, typePrompt}) => {
  const [title, setTitle] = useState("");

  const [intervalStatus, setIntervalStatus] = useState({
    intervalNum: -1,
    finished: false,
  });

  useEffect(() => {
    function* titleGenerator() {
      const title = text;
      let i = 0;
      for (; i < title.length; i++) yield title[i];
    }
    const titleGen = titleGenerator();

    const writeTitle = () => {
      const nextLetter = titleGen.next();
      if (nextLetter.done) {
        setTitle((prevTitle) => {
          return prevTitle + " ";
        });
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

    const milliseconds = speed;
    const intervalNum = setInterval(writeTitle, milliseconds);
    setIntervalStatus((prevStatus) => {
      const newStatus = { ...prevStatus, intervalNum: intervalNum };
      return newStatus;
    });
    return () => {
      clearInterval(intervalNum);
    };
  }, [text, speed]);

  if (intervalStatus.finished) {
    clearInterval(intervalStatus.intervalNum);
  }

  return (
      <>
      {title}{typePrompt}
      </>
  );
};

TypingText.defaultProps = {
    text: "Text"
}

TypingText.propTypes = {
    text: PropTypes.string
}

export default TypingText;
