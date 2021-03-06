import React, { useState } from "react";
import { useInViewEffect } from "react-hook-inview";
import styled from "styled-components";

const classes_when_visible = "opacity-1 enter-animation";

function ProjectFeed({ title, imageSrc }) {
  const [isVisible, setVisible] = useState(false);

  const feedRef = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
      setVisible(entry.isIntersecting);
    },
    { threshold: 0.5 }
  );

  return (
    <Container
      className=" relative bottom-44 md:bottom-24 flex flex-col  md:flex-row md:items-start mb-20 md:mb-44 "
      ref={feedRef}
    >
      <div
        className={
          isVisible
            ? `w-col-9 mb-3 md:mb-0 ml-col-1 md:w-col-2 md:ml-col-1 ${classes_when_visible}`
            : "w-col-9 ml-col-1 md:w-col-2 md:ml-col-1 opacity-0 translate-y-20"
        }
      >
        <h1 className=" font-shapiroMiddleExtd text-19px font-bold">{title}</h1>
      </div>

      <div
        className={
          isVisible
            ? `w-col-9 ml-col-1 md:w-col-7 md:ml-col-1 ${classes_when_visible}`
            : "w-col-9 ml-col-1 md:w-col-7 md:ml-col-1 opacity-0 translate-y-20"
        }
      >
        <img src={imageSrc} alt={title} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100vw;
  /* bottom: 6rem; */

  /* for the coming animation */
  .enter-animation {
    opacity: 1;
    transform: translateY(0);
    transition: 0.7s ease-in-out all;
    transition-delay: 0.2s;
  }
`;

export default ProjectFeed;
