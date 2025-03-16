// import { createSlice } from "@reduxjs/toolkit";

// type NavbarState = {
//   isDarkMode: boolean;
// };

// const initialState: NavbarState = {
//   isDarkMode: false,
// };

// const navbarSlice = createSlice({
//   name: "navbar",
//   initialState,
//   reducers: {
//     toggleTheme: (state) => {
//       state.isDarkMode = !state.isDarkMode;
//     },
//   },
// });

// export const { toggleTheme } = navbarSlice.actions;
// export default navbarSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light", // ✅ Pastikan state awal sesuai
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = navbarSlice.actions;
export default navbarSlice.reducer;
