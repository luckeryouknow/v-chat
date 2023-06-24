import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  render: false,
};

const inputMessagesSlice = createSlice({
  name: "render",
  initialState,

  reducers: {
    setRender: (state) => {
      state.render = true;
    },
  }
});

export const { setRender } = inputMessagesSlice.actions;

export const selectRender = (state) => state.render.render;

export default inputMessagesSlice.reducer;