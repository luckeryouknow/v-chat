import { query, collection, orderBy, onSnapshot, limitToLast } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { StyledCurrentName, StyledCurrentUserMessage, StyledImage, StyledMessageText, StyledMessages, StyledName, StyledUserMessage, StyledUserMessageText } from "./StyledMessages";
import { db } from "../../firebase";
import { selectCurrentChat } from "../CurrentChat/currentChatSlice";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";

export default function Messages () {
  const [messages, setMessages] = useState([]);
  const currentChat = useSelector(selectCurrentChat);

  const [localUser, setLocalUser] = useState(auth.currentUser);

  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    messagesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setLocalUser(auth.currentUser);
    if (currentChat !== "") {
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
  }, [currentChat]);

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