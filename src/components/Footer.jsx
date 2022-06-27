import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// import {
//   change,
//   nextProject,
//   previousProject,
// } from "../features/feed/feedSlice";
import { handleHero } from "../utils/currentPage";

function Footer({ offsetY }) {
  const [isVisible, setVisible] = useState(false);
  const documentHeight = document.documentElement.scrollHeight;
  const { pathname } = useLocation();
  const feed = useSelector((state) => state.feed.projects);
  const [activeProject, setActiveProject] = useState([]);
  // const dispatch = useDispatch();
  // const path = useSelector((state) => state.feed.path);
  // const navigate = useNavigate();
  // const navigateNext = () => {
  //   dispatch(nextProject());
  //   dispatch(change());
  //   navigate(String(path));
  // };
  // const navigatePre = () => {
  //   dispatch(previousProject());
  //   dispatch(change());
  //   navigate(String(path));
  // };

  useEffect(() => {
    if (offsetY > documentHeight - 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isVisible, offsetY, documentHeight]);

  useEffect(() => {
    setActiveProject(handleHero(pathname, feed));
  }, [feed, activeProject, pathname]);

  return (
    <Container className="" style={{ bottom: isVisible ? "0px" : "-75px" }}>
      <div id="footerMain" className="hidden md:flex w-full justify-between">
        <div className="footer-start w-col-4">
          <h1 className=" uppercase font-shapiroSuperWide">Mobin / mubeen</h1>
        </div>
        <div className="footer-center flex justify-around w-col-4">
          {/* <a
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigatePre();
            }}
            href="#"
            className=" font-shapiroMiddleWide"
          >
            Previous
          </a>
          <span></span>
          <a
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigateNext();
            }}
            href="#"
            className=" font-shapiroMiddleWide"
          >
            Next
          </a> */}

          <div>
            <a href="mailto:mobinsaiyed888@gmail.com">
              <h1 className=" uppercase font-bold hover:text-blackDarkest cursor-pointer transition-all ease-in ">
                mobinsaiyed888@gmail.com
              </h1>
            </a>
          </div>
        </div>
        <div className="footer-end w-col-4 flex justify-end">
          <div className=" text-9px font font-shapiroFeatherText font-bold uppercase">
            A creative Developer with attitude.
            <br />
            All Rights Reserved. Copyright 2022 ©
          </div>
        </div>
      </div>

      <div
        id="footerMobile"
        className="flex md:hidden w-full justify-center items-center"
      >
        <div className="footer-center flex justify-center items-center w-col-4">
          {/* <a href="#" className=" font-shapiroMiddleWide">
            Previous
          </a> */}
          <Link to={"/"} className=" font-shapiroMiddleWide">
            Next
          </Link>
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

  #footerMobile {
    bottom: -75px;
    height: 100%;
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
