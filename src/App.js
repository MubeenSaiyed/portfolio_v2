import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Rellax from "rellax";
import styled from "styled-components";
import "./App.css";
import About from "./components/About";
import DisplayParts from "./components/DisplayParts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectFeed from "./components/ProjectFeed";
import Sidebar from "./components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setActiveProject, setIsLoading } from "./features/feed/feedSlice";
import chevdown from "./images/icon_chev_down.png";
import MobileAbout from "./components/MobileAbout";
import Transition from "./components/Transition";
import anime from "animejs";

function App() {
  // const [isLoading, setLoading] = useState(true);
  const hero_wrapper = useRef();
  const containerRef = useRef();
  const [offsetY, setOffsetY] = useState(0);
  const feed = useSelector((state) => state.feed);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isChevDown = useSelector((state) => state.sidebar.isChevDown);
  const isLoading = useSelector((state) => state.feed.isLoading);
  useEffect(() => {
    dispatch(setActiveProject(pathname));
  }, [pathname, isLoading, dispatch]);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    new Rellax(hero_wrapper.current, {
      speed: -1.2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isLoading]);

  useEffect(() => {
    dispatch(setIsLoading(true));

    setTimeout(() => {
      // setLoading(false);
      dispatch(setIsLoading(false));
      anime({
        targets: containerRef.current,
        opacity: [0, 1],
        duration: 500,
        easing: "easeInOutQuad",
      });
    }, [2000]);
  }, [pathname]);

  return isLoading ? (
    <>
      <Transition />
    </>
  ) : (
    <Container ref={containerRef} id="scene" className="App rellax">
      <DisplayParts />
      <Header offsetY={offsetY} />
      <Sidebar />
      <div className="heroWrapper relative z-10" ref={hero_wrapper}>
        <Hero />
      </div>
      <MobileAbout offsetY={offsetY} />
      <About offsetY={offsetY} />

      <Routes>
        <Route
          path="/project/netflix"
          element={feed.projects?.netflix.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />
        <Route
          path="/project/shareme"
          element={feed.projects?.shareme.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />
        <Route
          path="/project/disneyplus"
          element={feed.projects?.disney.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />
        <Route
          path="/project/spotify"
          element={feed.projects?.spotify.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />

        <Route
          path="/"
          element={feed.projects?.netflix.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />

        <Route
          path="/project/instagram"
          element={feed.projects?.instagram.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />

        <Route
          path="/project/shareme"
          element={feed.projects?.shareme.map((item, i) =>
            i === 0 ? null : (
              <ProjectFeed key={i} title={item.title} imageSrc={item.src} />
            )
          )}
        />
      </Routes>

      {!isChevDown && (
        <ChevDown>
          <img src={chevdown} alt="go down" />
        </ChevDown>
      )}

      <Footer offsetY={offsetY} />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
`;

const ChevDown = styled.div`
  bottom: 0;
  display: block;
  height: 20%;
  opacity: 1;
  position: fixed;
  min-height: 150px;
  width: 100%;
  z-index: 99999;
  img {
    margin: 0 auto;
    display: block;
    opacity: 1;
    position: relative;
    top: 50%;
    width: 45px;
    animation-name: floating;
    animation-duration: 1.7s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes floating {
    from {
      top: 50%;
      opacity: 0;
    }
    50% {
      top: 60%;
      opacity: 1;
    }
    to {
      top: 50%;
      opacity: 0;
    }
  }
`;

export default App;
