import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Transition() {
  const { pathname } = useLocation();
  const transitionRef = useRef();
  const refH1 = useRef();

  useEffect(() => {
    anime({
      targets: transitionRef.current,
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: transitionRef.current,
      opacity: [1, 0],
      duration: 1000,
      delay: 1000,
      easing: "easeInOutQuad",
    });

    anime({
      targets: refH1.current,
      // translateY: [0, 1000],
      duration: 1000,
      letterSpacing: [0, 100],

      delay: 1000,
      easing: "easeInOutQuad",
    });
  }, [pathname]);

  return (
    <Container
      ref={transitionRef}
      className=" fixed top-0 left-0  z-50 grid place-items-center"
    >
      <h1 ref={refH1} className=" text-4xl text-white">
        LOADING
      </h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: bottom;
  z-index: 1000;
  background-color: black;
`;

export default Transition;
