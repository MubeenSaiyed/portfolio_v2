import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import feedSlice from "../features/feed/feedSlice";
import sidebarSlice from "../features/sidebar/sidebarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarSlice,
    feed: feedSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
