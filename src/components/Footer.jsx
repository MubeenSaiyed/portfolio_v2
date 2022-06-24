import React, { useEffect, useState } from "react";
import { useInViewEffect } from "react-hook-inview";
import styled from "styled-components";

function Footer({ offsetY }) {
  const [isVisible, setVisible] = useState(false);

  const documentHeight = document.documentElement.scrollHeight;
  useEffect(() => {
    if (offsetY > documentHeight - 800) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isVisible, offsetY, documentHeight]);

  return (
    <Container className="" style={{ bottom: isVisible ? "0px" : "-75px" }}>
      <div id="footerMain" className="flex w-full justify-between">
        <div className="footer-start w-col-4">
          <h1 className=" uppercase font-shapiroSuperWide">Mobin / mubeen</h1>
        </div>
        <div className="footer-center flex justify-around w-col-4">
          <a href="#" className=" font-shapiroMiddleWide">
            Previous
          </a>
          <span></span>
          <a href="#" className=" font-shapiroMiddleWide">
            Next
          </a>
        </div>
        <div className="footer-end w-col-4 flex justify-end">
          <div className=" text-9px font font-shapiroFeatherText font-bold uppercase">
            A creative Developer with attitude.
            <br />
            All Rights Reserved. Copyright 2022 ©
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: -75px;
  height: 75px;
  width: 100%;
  z-index: 100;
  background-color: #ececec;
  transition: 0.3s all cubic-bezier(0.39, 0, 0.76, 1.18);
  animation-delay: 0.4s;
  #footerMain {
    bottom: -75px;
    height: 100%;
    padding: 29px 4.05% 0 4.05%;
    color: #a7a7a7;
    a {
      color: #a7a7a7;
      transition: 0.3s ease-in-out all;

      &:hover {
        color: black;
      }
    }
    .footer-end {
      color: black;
    }
  }
`;

export default Footer;
