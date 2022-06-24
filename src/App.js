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
import { setCurrentProject } from "./features/feed/feedSlice";
import chevdown from "./images/icon_chev_down.png";
import MobileAbout from "./components/MobileAbout";

function App() {
  const [isLoading, setLoading] = useState(true);
  const hero_wrapper = useRef();
  const [offsetY, setOffsetY] = useState(0);
  const feed = useSelector((state) => state.feed);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isChevDown = useSelector((state) => state.sidebar.isChevDown);
  useEffect(() => {
    dispatch(setCurrentProject(pathname));
    setLoading(false);
    // for the hero wrapper rellax effect
    new Rellax(hero_wrapper.current, {
      speed: -1.3,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
    // end of useeffect
  }, [pathname, isLoading, dispatch]);

  useEffect(() => {
    // when app loads navigate to shareme app
    // navigate("/shareme");
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLoading]);

  return isLoading ? (
    <>
      <h1>Loading..</h1>
    </>
  ) : (
    <Container id="scene" className="App rellax">
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
          element={feed.projects?.shareme.map((item, i) =>
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
