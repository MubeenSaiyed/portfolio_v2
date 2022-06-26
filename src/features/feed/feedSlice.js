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

//netflix
import heroNetflix from "./../../images/netflix/hero.jpg";
import homeNet from "./../../images/netflix/home.jpg";
import home2Net from "./../../images/netflix/home2.jpg";
import mobileNet from "./../../images/netflix/mobileNetflix.jpg";

//spotify
import heroSpotify from "./../../images/spotify/hero.jpg";
import homeSpotify from "./../../images/spotify/home.jpg";
import loginSpotify from "./../../images/spotify/login.jpg";

//disney
import heroDisney from "./../../images/disney/hero.jpg";
import filmDisney from "./../../images/disney/film_disney.jpg";
import homeDisney from "./../../images/disney/home_disney.jpg";
import loginDisney from "./../../images/disney/login_disney.jpg";
import seriesDisney from "./../../images/disney/series_disney.jpg";

// ---------------------

const initialState = {
  projects: {
    netflix: [
      {
        id: 1,
        title: "Netflix Clone",
        src: heroNetflix,
        path: "/project/instagram",
        description:
          "Netflix Clone app. Created with reactJs and MovieDb api to access the show data. When click on any show you can watch trailer.",
      },
      {
        title: "Home page",
        src: homeNet,
      },
      {
        title: "Shows",
        src: home2Net,
      },
      {
        title: "Mobile view",
        src: mobileNet,
      },
    ],
    spotify: [
      {
        id: 2,
        title: "Spotify Clone",
        src: heroSpotify,
        path: "/project/spotify",
        description:
          "Spotify clone. Frontend as reactJs backend as Spotify api. where user can authenticate with spotify api.And access data like playlist, user information, etc.",
      },
      {
        title: "Login",
        src: loginSpotify,
      },
      {
        title: "Home page",
        src: homeSpotify,
      },
    ],
    shareme: [
      {
        id: 3,
        title: "Shareme app",
        src: heroShareme,
        path: "/project/shareme",
        description:
          "Shareme App. In this app user can login with google account.After login user can upload the post. Or can download the other user post.User can comment on post.User has it's own profile where user can see the posts he/she uploaded.There are many category to see specific posts.This app created with reactJs as frontend and sanity IO as frontend",
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
        title: "Instagram clone",
        src: heroInsta,
        path: "/project/instagram",
        description:
          "Instagram clone app.Forntend as reactJs and firebase as backend.User can login with google. After login user can access this app.It has many functionality. Like uploading post.Adding comment in real time.Can save post. User can Add story or delete uploded story. User can visit profile.Can Edit profile data.All the action are in real time without reloading the page.User can follow or unfollow the user.User can discover new posts in discover section.And much more.",
      },
      {
        title: "Login",
        src: loginInsta,
      },
      {
        title: "Home",
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
        title: "DesineyPlus clone",
        src: heroDisney,
        path: "/project/disneyplus",
        description:
          "Disney clone app.Forntend as reactJs and firebase as backend.User can login through google auth.User can check show info.just simple UI design.",
      },
      {
        title: "Login page",
        src: loginDisney,
      },
      {
        title: "Home",
        src: homeDisney,
      },
      {
        title: "Shows",
        src: seriesDisney,
      },
      {
        title: "Movie page",
        src: filmDisney,
      },
    ],
  },
  activeProject: [],
  count: 0,
  path: "",
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setActiveProject(state, path) {
      switch (path.payload) {
        case "/project/instagram":
          state.activeProject = state.projects.instagram;
          break;
        case "/project/spotify":
          state.activeProject = state.projects.spotify;
          break;
        case "/project/netflix":
          state.activeProject = state.projects.netflix;
          break;
        case "/project/disneyplus":
          state.activeProject = state.projects.disney;
          break;
        case "/project/shareme":
          state.activeProject = state.projects.shareme;
          break;
        default:
          state.activeProject = state.projects.netflix;
          break;
      }
    },

    change(state) {
      switch (state.count) {
        case 1:
          state.path = "/project/netflix";
          break;
        case 2:
          state.path = "/project/spotify";

          break;
        case 3:
          state.path = "/project/shareme";

          break;
        case 4:
          state.path = "/project/instagram";
          break;
        case 5:
          state.path = "/project/disneyplus";
          break;
      }
    },

    nextProject(state) {
      let active = state.activeProject;
      let length = Object.keys(state.projects).length;
      if (active[0].id < length) {
        state.count++;
      } else {
        state.count = 1;
      }
    },

    previousProject(state) {
      let length = Object.keys(state.projects).length;
      if (state.count < 1) {
        state.count = length;
      } else {
        state.count--;
        // state.count--;
      }
      // console.log(state.count);
    },
  },
});

export const { setActiveProject, nextProject, previousProject, change } =
  feedSlice.actions;

export const selectFeed = (state) => state.feed;

export default feedSlice.reducer;
