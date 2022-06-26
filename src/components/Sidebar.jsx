import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MOBIN from "./../images/mobin.webp";
import { handleSidebarState } from "../features/sidebar/sidebarSlice";
function Sidebar() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const projectsLinks = [
    { title: "Netflix", link: "netflix" },
    { title: "Spotify", link: "spotify" },
    { title: "Share Me", link: "shareme" },
    { title: "Instagram", link: "instagram" },
    { title: "DisneyPlus", link: "disneyplus" },
  ];

  const closeSidebar = () => {
    dispatch(handleSidebarState());
  };

  return (
    <Container
      style={{ transitionDelay: isOpen ? "0s" : "0.4s" }}
      className={`flex h-screen 
        w-col-10 md:w-col-11
        bg-navColor
        ${isOpen ? "scale-x-100" : "scale-x-0"}
        `}
    >
      <ContentWrapper id="Sidebar">
        <Projects className=" min-w-fit">
          {projectsLinks.map((project, i) => (
            <div
              key={i}
              className={`link mb-4  ${isOpen ? "show" : "hide"} `}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <Link
                to={`/project/${project.link}`}
                onClick={() => closeSidebar()}
                className=" link-item flex items-center"
              >
                <span className="font-shapiroMiddleExtd text-28px md:text-72px  lg:text-92px leading-20px md:leading-45px">
                  {project.title}
                </span>
              </Link>
            </div>
          ))}
        </Projects>
        <Image
          className={` w-col-7 bottom-0  lg:top-0 md:w-col-4   ${
            isOpen ? "enter" : "leave"
          }`}
        >
          <img className={`w-full`} src={MOBIN} alt="mobin saiyad" />
        </Image>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.section`
  position: fixed;
  /* min-width: calc(100% - 8%); */
  max-width: 100%;
  z-index: 1000;
  transform-origin: left;
  transition: transform 0.4s ease-in-out;
`;

const ContentWrapper = styled.div`
  margin: 50px;
  display: block;
  width: 83.3%;
  height: 100%;

  .enter {
    opacity: 1;
    right: 0px;
    transition-delay: 400ms;
  }
  .leave {
    opacity: 0;
    right: 20px;
    transition-delay: 100ms;
  }
`;

const Image = styled.section`
  position: absolute;
  right: 0;
  transition: 0.4s ease-in-out;
`;

const Projects = styled.div`
  position: relative;
  z-index: 100;
  .link {
    /* opacity: 0;   */
    transition: 0.2s ease-in-out;

    a {
      height: 45px;
      overflow-y: hidden;
      transition: 0.2s ease-in-out;

      &:hover {
        height: 92px;
      }
    }
  }

  .show {
    opacity: 1;
    transform: translateX(0px);
  }
  .hide {
    opacity: 0;
    transform: translateX(200px);
  }
`;

export default Sidebar;
