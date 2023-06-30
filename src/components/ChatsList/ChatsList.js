import { StyledChat, StyledChatImage, StyledChatName, StyledChatsList, StyledFindUserButton } from "./StyledChatsList";
import { auth, db } from "../../firebase";
import { useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../CurrentChat/currentChatSlice";
import { setRender } from "../InputMessages/inputMessagesSlice";
import { open } from "../FindUser/findUserSlice";
import { openChat } from "../CurrentChat/currentChatSlice";
import { onAuthStateChanged } from "firebase/auth";

export default function ChatsList () {
  const [chats, setChats] = useState([]);

  const [user, setUser] = useState();
  const [localUser, setLocalUser] = useState({});

  const dispatch = useDispatch();

  const findUserButtonHandler = () => {
    dispatch(open());
  };

  onAuthStateChanged(auth, () => {
    setUser(auth.currentUser);
    localStorage.setItem("localUser", JSON.stringify(user));

    setLocalUser(JSON.parse(localStorage.getItem("localUser")));

    if (localUser) {
      const chatsQuery = query(
        collection(db, localUser.displayName + " chats")
      );
  
      const unsubscribe = onSnapshot(chatsQuery, (QuerySnapshot) => {
        let chats = [];
        QuerySnapshot.forEach((doc) => {
          chats.push({ ...doc.data(), id: doc.id });
        });
        setChats(chats);
      });
      return () => unsubscribe;
    }
  });

  const chatClickHandler = (event) => {
    dispatch(setCurrentChat(event.target.id));
    dispatch(setRender(true));
    dispatch(openChat());
  };

  return (
    <StyledChatsList>
      <StyledFindUserButton onClick={findUserButtonHandler}>&#9998;</StyledFindUserButton>

      {chats.map((chat) => (
        <StyledChat id={localUser.displayName + chat.name} onClick={chatClickHandler} key={localUser.displayName + chat.name}>
          <StyledChatImage 
           src={chat.profilePicture} 
           alt="profile" 
           id={localUser.displayName + chat.name}
           onClick={chatClickHandler}
          />
          <StyledChatName>{chat.name}</StyledChatName>
        </StyledChat>
      ))}
    </StyledChatsList>
  );
}