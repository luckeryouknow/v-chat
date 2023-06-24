import { configureStore } from "@reduxjs/toolkit";
import findUserReducer from "../components/FindUser/findUserSlice";
import authenticationReducer from "../components/Authentication/authenticationSlice";
import currentChatReducer from "../components/CurrentChat/currentChatSlice";
import inputMessagesReducer from "../components/InputMessages/inputMessagesSlice";

export const store = configureStore({
  reducer: {
    findUser: findUserReducer,
    authenticationMargin: authenticationReducer,
    currentChat: currentChatReducer,
    render: inputMessagesReducer,
  }
})