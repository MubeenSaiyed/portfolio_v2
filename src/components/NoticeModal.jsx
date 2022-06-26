import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { handleNotice } from "../features/sidebar/sidebarSlice";

function NoticeModal() {
  const dispatch = useDispatch();
  return (
    <Container className=" fixed drop-shadow-xl z-50 h-72 w-col-7 bg-greyLight grid place-items-center">
      <div className="">
        <h1 className="text-center text-3xl font-shapiroSuperWide">Notice.</h1>

        <h2 className=" text-2xl font-shapiroFeatherText text-center">
          currently in development.
        </h2>
        <p className=" text-orange text-19px font-shapiroFeatherText">
          You may find inconsistency in this project.
        </p>
        <div className="flex flex-col items-center">
          Visit my other portfolio.
          <a
            href="https://mubeensaiyed.netlify.app/"
            target="_blank"
            className="font-bold"
          >
            MubeenSaiyed
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={() => dispatch(handleNotice())}
            className="border p-3 w-col-7"
          >
            Close
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default NoticeModal;
