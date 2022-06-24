import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  isChevDown: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    handleSidebarState: (state) => {
      state.isOpen = !state.isOpen;
    },
    handleChevDown(state) {
      state.isChevDown = !state.isChevDown;
    },
  },
});

export const { handleSidebarState, handleChevDown } = sidebarSlice.actions;

// export const isSidebarOpen = (state) => state.sidebar.isOpen;

export default sidebarSlice.reducer;
