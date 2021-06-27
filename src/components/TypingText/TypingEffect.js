import React from "react";
import ReactTypingEffect from "react-typing-effect";

const ReactTypingEffectDemo = () => {

  return (
    <>
      <ReactTypingEffect
        typingDelay={100}
        text={["Hello.", "World!!!"]}
        cursorRenderer={(cursor) => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <>
              {text.split("").map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    // style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >
                    {char}
                  </span>
                );
              })}
            </>
          );
        }}
      />
    </>
  );
};

export default ReactTypingEffectDemo;
