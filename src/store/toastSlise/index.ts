import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Toast = "info" | "success" | "warning" | "error";

const toastSlice = createSlice({
  name: "toasts",
  initialState: [],
  reducers: {
    addToast: (state, action: PayloadAction<{message: string, type: Toast }>) => {
      state.push({
        id: Date.now(),
        message: action.payload.message,
        type: action.payload.type,
        visible: true,
      });
    },
    removeToast: (state, action) => {
      return state.filter((toast) => toast.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
