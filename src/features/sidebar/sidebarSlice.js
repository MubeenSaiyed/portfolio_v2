import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isChevDown: false,
  notice: true,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    handleSidebarState: (state) => {
      state.isOpen = !state.isOpen;
    },
    handleChevDown(state) {
      state.isChevDown = true;
    },
    handleNotice(state) {
      state.notice = false;
    },
  },
});

export const isSidebarOpen = (state) => state.sidebar.isOpen;

export const { handleSidebarState, handleChevDown, handleNotice } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
