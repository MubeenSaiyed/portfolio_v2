import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

function Hero() {
  const titleScene = useRef({});
  const [Y, setY] = useState(0);
  const [X, setX] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setY(e.pageY);
      setX(e.pageX);
    });
  }, []);

  return (
    <Container className=" h-screen w-full flex items-center">
      <TitleScene
        ref={titleScene}
        className=" font-shapiroSuperWide leading-hero"
        style={{
          transform: `translate3d(-${X / 50}px, -${Y / 50}px,0)`,
        }}
      >
        <div className=" text-hero">
          <span>A creative</span>
          <br />
          <span> Developer</span>
        </div>
        <div className="text-hero">
          <span>with </span>
          <br />
          <span>attitude.</span>
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
`;
const TitleScene = styled.div`
  margin-top: 35px;
  overflow: hidden;
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
