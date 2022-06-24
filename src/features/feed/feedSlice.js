import { createSlice } from "@reduxjs/toolkit";
import heroInsta from "./../../images/instagram/hero.jpg";
import homeInsta from "./../../images/instagram/home_insta.jpg";
import loginInsta from "./../../images/instagram/login_insta.jpg";
import modalInsta from "./../../images/instagram/modal_insta.jpg";
import profileInsta from "./../../images/instagram/profile_insta.jpg";

// shareme
import heroShareme from "./../../images/shareme/hero.jpg";
import homeShare from "./../../images/shareme/home_shareme.jpg";
import loginShare from "./../../images/shareme/login_shareme.jpg";
import postShare from "./../../images/shareme/post_shareme.jpg";
import profileShare from "./../../images/shareme/profile_shareme.jpg";

//disney
import heroDisney from "./../../images/disney/hero.jpg";

//netflix
import heroNetflix from "./../../images/netflix/hero.jpg";

//spotify
import heroSpotify from "./../../images/spotify/hero.jpg";

const initialState = {
  projects: {
    netflix: [{ id: 1, titile: "Netflix", src: heroNetflix }],
    spotify: [
      {
        id: 2,
        title: "Spotify",
        src: heroSpotify,
      },
    ],
    shareme: [
      {
        id: 3,
        title: "Hero",
        src: heroShareme,
      },
      {
        title: "Login with google",
        src: loginShare,
      },
      {
        title: "Home",
        src: homeShare,
      },

      {
        title: "Profile page",
        src: postShare,
      },
      {
        src: profileShare,
        title: "Feed",
      },
    ],

    instagram: [
      {
        id: 4,
        title: "Hero",
        src: heroInsta,
      },
      {
        title: "Login",
        src: loginInsta,
      },
      {
        title: "Instagram",
        src: homeInsta,
      },

      {
        title: "Profile",
        src: profileInsta,
      },
      {
        title: "Post popup",
        src: modalInsta,
      },
    ],

    disney: [
      {
        id: 5,
        title: "Hero",
        src: heroDisney,
      },
    ],
  },
  currentProject: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setCurrentProject(state, path) {
      switch (path.payload) {
        case "/project/instagram":
          state.currentProject = state.projects.instagram;
          break;
        case "/project/spotify":
          state.currentProject = state.projects.spotify;
          break;
        case "/project/netflix":
          state.currentProject = state.projects.netflix;
          break;
        case "/project/disneyplus":
          state.currentProject = state.projects.disney;
          break;
        default:
          state.currentProject = state.projects.shareme;
          break;
      }
    },
  },
});

export const { setCurrentProject } = feedSlice.actions;

export const selectFeed = (state) => state.feed;

export default feedSlice.reducer;
