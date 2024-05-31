import { createSlice } from "@reduxjs/toolkit";

const authState = { isLogin: false };

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    loginOut(state) {
      state.isLogin = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
