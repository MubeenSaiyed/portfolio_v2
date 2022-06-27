import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handleChevDown } from "../features/sidebar/sidebarSlice";

function About({ offsetY }) {
  const heroImg = useRef();
  const intro_section = useRef();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const activeProject = useSelector((state) => state.feed.activeProject);
  const dispatch = useDispatch();
  useEffect(() => {
    if (offsetY > 60) {
      heroImg.current.style.transform = "rotate(0deg) skew(0deg, 0deg)";
      intro_section.current.style.top = "-250px";
      heroImg.current.style.maxWidth = "100%";
      dispatch(handleChevDown());
    } else {
      heroImg.current.style.transform =
        "translateX(-49.33%) rotate(-22deg) skew(12deg, 13deg)";
      intro_section.current.style.top = "100px";
      heroImg.current.style.maxWidth = "80em";
    }
  }, [offsetY]);

  return (
    <Container
      className={`hidden md:flex relative justify-start w-screen ${
        isSidebarOpen ? "grayscale-1 opacity-25 scale-75" : " opacity-100"
      }`}
      id="About"
    >
      <div className=" w-col-1"></div>
      <div
        ref={intro_section}
        className="intro w-col-2 transition-all  relative flex flex-col justify-end"
      >
        <h1 className=" font-shapiroMiddleWide text-center">
          {activeProject[0].title}
        </h1>
        <div className="mt-10 ">
          <div className=" font-shapiroFeatherText text-13px ">
            {activeProject[0].description}
          </div>
        </div>
      </div>
      <div className="w-col-1"></div>
      <HeroWrapper className="hero-wrap w-col-7 -translate-y-col-2">
        <div className="inner-hero flex">
          {/* <img ref={heroImg} className="" src={heroImage} alt="" /> */}
          <IMG src={activeProject[0].src} ref={heroImg} />
        </div>
      </HeroWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 0;
  /* margin-left: 8.33%; */
  height: 80vh;
  bottom: 10rem;
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
  /* margin-left: 8.33%; */
  min-height: 80vh;
  /* max-width: 100%; */
  .inner-hero {
    /* padding-top: 250px; */
    margin-top: -40px;

    img {
      transition: all 0.7s ease-in-out;
      /* max-width: 80em; */
    }
  }
`;

const IMG = styled.img`
  transition: all 0.4s ease-in-out;
`;

export default About;
