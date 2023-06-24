import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentChat: "",
  display: "none",
};

export const currentChatSlice = createSlice({
  name: "currentChat",
  initialState,

  reducers: {
    setCurrentChat: (state, action) => {
      state.currentChat = action.payload;
    },

    openChat: (state) => {
      state.display = "block";
    },

    closeChat: (state) => {
      state.display = "none";
    }
  }
});

export const { setCurrentChat, openChat, closeChat } = currentChatSlice.actions;

export const selectCurrentChat = (state) => state.currentChat.currentChat;
export const selectDisplay = (state) => state.currentChat.display;

export default currentChatSlice.reducer;