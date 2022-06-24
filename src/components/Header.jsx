import anime from "animejs";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { setCurrentProject } from "../features/feed/feedSlice";
import { handleSidebarState } from "../features/sidebar/sidebarSlice";
import { handleHero } from "../utils/currentPage";

function Header({ offsetY }) {
  const [isScrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const feed = useSelector((state) => state.feed.projects);
  const pathname = window.location.pathname;
  const addGrayscale = isSidebarOpen
    ? "grayscale-1 opacity-25"
    : " opacity-100";

  const toggleNav = () => {
    dispatch(handleSidebarState());
  };

  useEffect(() => {
    if (offsetY > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [offsetY]);

  const applyAnimationOnLoad = (
    el,
    yValue = 0,
    xValue = 0,
    duration = 800,
    delay
  ) => {
    anime({
      targets: el,
      translateY: yValue,
      translateX: xValue,
      duration: duration,
      delay: delay,
    });
  };

  // for the animation
  useEffect(() => {
    applyAnimationOnLoad("#currentPage", [-200, 0], 0, 800, 1500);
    applyAnimationOnLoad("#Contact", [-200, 0], 0, 800, 1700);
    applyAnimationOnLoad("#WaterMark", [-200, 0], 0, 800, 1900);
    applyAnimationOnLoad("#brandLogo", [-200, 0], 0, 800, 2100);
    dispatch(setCurrentProject(pathname));
    setCurrentPage(handleHero(pathname, feed).id);
  }, [pathname]);

  return (
    <Container className={`flex`}>
      <Wrapper>
        <div
          id="currentPage"
          className={`w-col-2 md:w-col-1 text-end font-shapiroMiddleExtd text-13px ${addGrayscale} `}
        >
          {currentPage} / {Object.keys(feed).length}
        </div>
        {/* 
          mobile : col-4 
          else: col-2
        */}
        <div className="w-col-2"></div>
        <div className="w-col-2 hidden md:block">
          <div className="flex">
            <a
              id="Contact"
              href="#"
              className={`font-shapiroMiddleExtd font-thin text-13px ${addGrayscale}`}
            >
              CONTACT
            </a>
          </div>
        </div>
        <div className="w-col-1 hidden md:block"></div>
        <div className="w-col-1 hidden md:block"></div>
        <div className="w-col-7 md:w-col-4">
          <div
            id="WaterMark"
            className="flex justify-end text-end font-shapiroMiddleWide text-9px leading-20px"
          >
            <div className={`${addGrayscale}`}>
              <span>
                2022 / Portfolio:
                <span className="font-bold">MobinSaiyad &copy;</span>
                <br />
                Brand Identity, Digital Art,
                <br />
                Web Design & Development, NFT Minting
              </span>
            </div>
          </div>
        </div>
        <div className="w-col-2 md:w-col-1">
          <a
            href="#"
            className=" relative top-8 rotate-90 block text-center font-shapiroSuperWide  text-18px "
          >
            <span className="text-1xl block " id="brandLogo">
              MOBIN
            </span>
          </a>

          <div className="menu-trigger relative w-full top-32 h-16 ">
            <div
              onClick={() => toggleNav()}
              className="lines flex flex-col justify-center w-full h-full items-center cursor-pointer"
            >
              <div
                className={
                  !isSidebarOpen
                    ? "bar-1 w-32% h-1px bg-blackDarkest transition-all ease-in-out "
                    : "bar-1 w-24px h-1px bg-blackDarkest rotate-45 relative top-0.85rem transition-all ease-in-out delay-300"
                }
              ></div>
              <div
                className={
                  isSidebarOpen
                    ? "bar-3 w-24px h-1px bg-blackDarkest my-1.5 opacity-0 transition-all ease-in-out"
                    : "bar-3 w-32% h-1px bg-blackDarkest my-1.5 transition-all ease-in-out"
                }
              ></div>
              <div
                className={
                  !isSidebarOpen
                    ? "bar-2 w-32% h-1px bg-blackDarkest  transition-all ease-in-out "
                    : "bar-2 w-24px h-1px bg-blackDarkest -rotate-45 transition-all delay-300 ease-in-out"
                }
              ></div>
            </div>
          </div>

          <div className="  relative  w-max h-full top-80 grid place-items-center ">
            <div
              className={
                isScrolled
                  ? "opacity-0 header-bottom_label  w-max  font-shapiroLightHeavy uppercase text-9px -rotate-90"
                  : "opacity-1 header-bottom_label  w-max  font-shapiroLightHeavy uppercase text-9px -rotate-90"
              }
            >
              <span className="font-bold">MOBIN the programmer</span>
              <br />
              <span className="font-thin">All rights reserved 2022&copy;</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  position: fixed;
  max-width: 100vw;
  width: 100%;
  z-index: 99;
  top: 0;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  width: 100%;
  height: 100%;

  .header-bottom_label {
    transition: opacity 0.7s ease-in-out;
  }
`;

export default Header;
