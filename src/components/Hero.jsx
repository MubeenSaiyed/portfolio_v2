import anime from "animejs";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import HeroText from "./HeroText";

function Hero() {
  const titleScene = useRef({});
  const [Y, setY] = useState(0);
  const [X, setX] = useState(0);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  let heroTextArray = [
    "A",
    "c",
    "r",
    "e",
    "a",
    "t",
    "i",
    "v",
    "e",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    "w",
    "i",
    "t",
    "h",
    "a",
    "t",
    "t",
    "i",
    "t",
    "u",
    "d",
    "e",
    ".",
  ];

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

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setY(e.pageY);
      setX(e.pageX);
    });
  }, []);

  return (
    <Container
      className={`h-screen w-screen flex md:items-start lg:items-center ${
        isSidebarOpen ? "grayscale-1 opacity-25 scale-75" : " opacity-100"
      }`}
    >
      <TitleScene
        ref={titleScene}
        className="font-shapiroSuperWide
            mt-65% md:mt-30% lg:mt-4% 
           leading-36px  md:leading-hero"
        style={{
          transform: `translate3d(-${X / 50}px, -${Y / 50}px,0)`,
        }}
      >
        <div className=" text-36px md:text-62px lg:text-76px">
          {heroTextArray.map((text, i) => {
            return <HeroText text={text} i={i} key={i} />;
          })}
        </div>
      </TitleScene>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 1000;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
`;
const TitleScene = styled.div`
  /* margin-top: 30%; */
  /* overflow: hidden; */
  padding-bottom: 30px;
  margin-left: 8.3vw;
  transition: 100ms;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  display: block;
  left: 0px;
  top: 0px;
`;

export default Hero;
