import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  message: string;
  variant: "success" | "release" | "info";
  isVisible: boolean;
}

const initialState: ToastState = {
  message: "",
  variant: "info",
  isVisible: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Partial<ToastState>>) => {
      state.message = action.payload.message ?? ""; // Default ke string kosong jika tidak ada
      state.variant = action.payload.variant ?? "info";
      state.isVisible = true;
    },

    hideToast: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
