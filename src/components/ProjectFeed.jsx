import React from "react";
import styled from "styled-components";

function ProjectFeed({ title, imageSrc }) {
  return (
    <Container className=" relative  flex">
      <div className=" w-col-2 ml-col-1">
        <h1 className=" font-shapiroMiddleExtd text-19px font-bold">{title}</h1>
      </div>

      <div className=" w-col-7 ml-col-1">
        <img src={imageSrc} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100vw;
  bottom: 11rem;
`;

export default ProjectFeed;
