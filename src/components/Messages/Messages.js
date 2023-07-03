import { query, collection, orderBy, onSnapshot, limitToLast } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { StyledCurrentName, StyledCurrentUserMessage, StyledImage, StyledMessageText, StyledMessages, StyledName, StyledUserMessage, StyledUserMessageText } from "./StyledMessages";
import { db } from "../../firebase";
import { selectCurrentChat } from "../CurrentChat/currentChatSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Messages () {
  const [messages, setMessages] = useState([]);
  const currentChat = useSelector(selectCurrentChat);

  const [localUser] = useAuthState(auth);

  const messagesRef = useRef(null);

  const getChatMessages = () => {
    console.log("hello world");
    localStorage.setItem("localUser", JSON.stringify(localUser));

    if (currentChat !== "" && currentChat.includes(localUser.displayName)) {
      const messagesQuery = query(
        collection(db, currentChat),
        orderBy("createdAt"),
        limitToLast(50)
      );
  
      const unsubscribe = onSnapshot(messagesQuery, (QuerySnapshot) => {
        let messages = [];
        QuerySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe;
    };
  };

  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(getChatMessages, [currentChat, localUser]);

  useEffect(scrollToBottom, [messages]);

  return (
    <StyledMessages>
      {messages?.map((message) => {
        if (message.userName === localUser.displayName) {
          return (
            <StyledCurrentUserMessage key={message.createdAt}>
              <StyledImage src={message.profilePicture} alt="profile" />
              <div>
                <StyledCurrentName>{message.userName}</StyledCurrentName>
                <StyledUserMessageText>{message.message}</StyledUserMessageText>
              </div>
            </StyledCurrentUserMessage>
          );
        } else {
          return (
            <StyledUserMessage key={message.createdAt}>
              <StyledImage src={message.profilePicture} alt="profile" />
              <div>
                <StyledName>{message.userName}</StyledName>
                <StyledMessageText>{message.message}</StyledMessageText>
              </div>
            </StyledUserMessage>
          )
        }
      })}
      <div ref={messagesRef}></div>
    </StyledMessages>
  );
}