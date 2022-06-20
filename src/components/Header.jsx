import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Header({ offsetY }) {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const toggleNav = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (offsetY > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [offsetY]);

  return (
    <Container className="flex">
      <Wrapper>
        <div className="w-col-1 text-end font-shapiroMiddleExtd text-13px">
          1 / 6
        </div>
        <div className="w-col-2"></div>
        <div className="w-col-2">
          <div className="flex">
            <a href="#" className=" font-shapiroMiddleExtd font-thin text-13px">
              CONTACT
            </a>
          </div>
        </div>
        <div className="w-col-1"></div>
        <div className="w-col-1"></div>
        <div className="w-col-4">
          <div className="flex justify-end text-end font-shapiroMiddleWide text-9px leading-20px">
            <div>
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
        <div className="w-col-1">
          <a
            href="#"
            className=" relative top-8 rotate-90 block text-center font-shapiroSuperWide  text-18px "
          >
            <span className="text-1xl block ">MOBIN</span>
          </a>

          <div className="menu-trigger relative w-full top-32 h-16 ">
            <div
              onClick={() => toggleNav()}
              className="lines flex flex-col justify-center w-full h-full items-center cursor-pointer"
            >
              <div
                className={
                  !toggle
                    ? "bar-1 w-38px h-1px bg-blackDarkest transition-all ease-in-out "
                    : "bar-1 w-24px h-1px bg-blackDarkest rotate-45 relative top-0.85rem transition-all ease-in-out delay-300"
                }
              ></div>
              <div
                className={
                  toggle
                    ? "bar-3 w-24px h-1px bg-blackDarkest my-1.5 opacity-0 transition-all ease-in-out"
                    : "bar-3 w-38px h-1px bg-blackDarkest my-1.5 transition-all ease-in-out"
                }
              ></div>
              <div
                className={
                  !toggle
                    ? "bar-2 w-38px h-1px bg-blackDarkest  transition-all ease-in-out "
                    : "bar-2 w-24px h-1px bg-blackDarkest -rotate-45 transition-all delay-300 ease-in-out"
                }
              ></div>
            </div>
          </div>

          <div className="  relative  w-max h-full top-80 grid place-items-center ">
            <div
              className={
                isScrolled
                  ? "opacity-0 transition-all ease-in-out w-max  font-shapiroLightHeavy uppercase text-9px -rotate-90"
                  : "opacity-1 transition-all ease-in-out w-max  font-shapiroLightHeavy uppercase text-9px -rotate-90"
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
  z-index: 999999;
  top: 0;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  display: flex;
  width: 100%;
  height: 100%;
`;

export default Header;
