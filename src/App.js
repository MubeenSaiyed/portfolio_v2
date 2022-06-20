import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Rellax from "rellax";
import styled from "styled-components";
import "./App.css";
import About from "./components/About";
import DisplayParts from "./components/DisplayParts";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectFeed from "./components/ProjectFeed";
import Test from "./components/Test";
import heroImage from "./images/hero.jpg";

function App() {
  const [isLoading, setLoading] = useState(true);
  const hero_wrapper = useRef();
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isLoading ? (
    <>
      <h1>Loading..</h1>
    </>
  ) : (
    <Container id="scene" className="App rellax">
      <DisplayParts />
      <Header offsetY={offsetY} />
      <div className="heroWrapper relative z-10" ref={hero_wrapper}>
        <Hero />
      </div>
      <About offsetY={offsetY} />
      <ProjectFeed title="NFT gallery" imageSrc={heroImage} />
      <Test />
      <Routes>{/* <Route path="/hh" element={<DisplayParts />} /> */}</Routes>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
`;

export default App;
