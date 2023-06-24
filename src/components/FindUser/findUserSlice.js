import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  margin: "-100vh",
  inputValue: "",
};

export const findUserSlice = createSlice({
  name: "findUser",
  initialState,

  reducers: {
    open: (state) => {
      state.margin = "0vh";
    },

    close: (state) => {
      state.margin = "-100vh";
    },

    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  }
});

export const { open, close, setInputValue } = findUserSlice.actions;

export const selectFindUserMargin = (state) => state.findUser.margin;
export const selectInputValue = (state) => state.findUser.inputValue;

export default findUserSlice.reducer;