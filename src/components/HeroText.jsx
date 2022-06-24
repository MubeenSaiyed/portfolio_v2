import anime from "animejs";
import React, { useEffect } from "react";

function HeroText({ text, i }) {
  const randomNum = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "#",
    "@",
    "$",
    "%",
    "&",
    "*",
    "!",
  ];

  const animateTextOnLoad = (el, index, attitude) => {
    if (!attitude) {
      anime({
        targets: el,
        translateY: [-200, 0],
        duration: 800,
        opacity: [0, 1],
        delay: index * 50,
      });
    } else {
      anime({
        targets: el,
        scale: [10, 1],
        duration: 800,
        opacity: [0, 1],
        delay: index * 50,
      });
    }
  };

  useEffect(() => {
    animateTextOnLoad(`#heroText-${i}`, i);
    animateTextOnLoad(`#attitude-${i}`, i, true);
  }, []);

  return (
    <>
      {/* {i === 0 ? " " : i === 8 || i === 17 || i === 21 ? <br /> : " "} */}
      {i === 0 ? (
        <span id={`heroText-${i}`} className=" inline-block">
          {text}&#160;
        </span>
      ) : i === 8 || i === 17 || i === 21 ? (
        <>
          <span
            id={i > 21 ? `attitude-${i}` : `heroText-${i}`}
            className=" inline-block"
          >
            {text}
          </span>
          <br />
        </>
      ) : (
        <span
          id={i > 21 ? `attitude-${i}` : `heroText-${i}`}
          className=" inline-block"
        >
          {text}
        </span>
      )}
    </>
  );
}

export default HeroText;
