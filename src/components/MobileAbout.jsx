import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function MobileAbout({ offsetY }) {
  const heroImg = useRef();
  const intro_section = useRef();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const activeProject = useSelector((state) => state.feed.activeProject);

  return (
    <Container
      className={`sm:hidden relative flex  flex-col-reverse w-screen ${
        isSidebarOpen ? "grayscale-1 opacity-25 scale-75" : " opacity-100"
      }`}
      id="About"
    >
      <div className=" w-col-1"></div>
      <div
        ref={intro_section}
        className="intro transition-all w-col-9  relative flex flex-col justify-end ml-col-1"
      >
        <h1 className=" font-shapiroMiddleWide text-center uppercase">
          {activeProject[0].title}
        </h1>
        <div className="mt-10">
          <div className=" font-shapiroFeatherText text-13px ">
            {activeProject[0].description}
          </div>
        </div>
      </div>
      <div className="w-col-1"></div>
      <HeroWrapper className="hero-wrap w-col-7 -translate-y-col-2 overflow-hidden">
        <div className="inner-hero flex  translate-y-44">
          <IMG className=" " src={activeProject[0].src} ref={heroImg} />
        </div>
      </HeroWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  /* margin-left: 8.33%; */
  height: 100vh;
  bottom: 30rem;
  transition: all 0.5s ease-in-out;
  h1 {
    font-size: 30px;
    line-height: 30px;
    font-weight: bold;
  }

  .intro {
    height: auto;
    z-index: 100;
    /* margin-bottom: 200px; */
    /* margin-top: 200px; */
    transition: all 0.7s ease-in-out;
    top: 100px;
  }
`;

const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
  .inner-hero {
    /* margin-top: -40px; */
    height: 55vh;
  }
`;

const IMG = styled.img`
  margin-left: 0;
  margin-top: 50px;
  transform: scale(2) skew(10deg, 10deg);
  transition: all 0.4s ease-in-out;
`;

export default MobileAbout;
