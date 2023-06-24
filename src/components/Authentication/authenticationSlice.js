import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  margin: "0vh",
}

export const authenticationSlice = createSlice({
  name: "authenticationMargin",
  initialState, 

  reducers: {
    close: (state) => {
      state.margin = "-100vh";
    }
  }
});

export const { close } = authenticationSlice.actions;

export const selectAuthenticationMargin = (state) => state.authenticationMargin.margin;

export default authenticationSlice.reducer;
