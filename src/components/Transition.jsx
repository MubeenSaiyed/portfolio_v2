import anime from "animejs";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function Transition() {
  const { pathname } = useLocation();
  const transitionRef = useRef();

  useEffect(() => {
    anime({
      targets: transitionRef.current,
      width: [0, "100%"],
      duration: 1000,
      easing: "easeInOutQuad",
    });
    anime({
      targets: transitionRef.current,
      scaleX: [1, 0],
      duration: 1000,
      delay: 1000,
      easing: "easeInOutQuad",
    });
  }, [pathname]);

  return (
    <Container
      ref={transitionRef}
      className=" bg-yellow fixed top-0 left-0 border z-50"
    >
      sdf
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  transform-origin: right;
  z-index: 1000;
`;

export default Transition;
