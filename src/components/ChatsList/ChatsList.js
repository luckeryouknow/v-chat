import { StyledChat, StyledChatImage, StyledChatsList, StyledDeleteChat, StyledDeleteContainer, StyledFindUserButton } from "./StyledChatsList";
import { auth, db } from "../../firebase";
import { useEffect, useRef, useState } from "react";
import { collection, query, onSnapshot, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setCurrentChat } from "../CurrentChat/currentChatSlice";
import { setRender } from "../InputMessages/inputMessagesSlice";
import { open } from "../FindUser/findUserSlice";
import { openChat } from "../CurrentChat/currentChatSlice";
import { useAuthState } from 'react-firebase-hooks/auth';


export default function ChatsList () {
  const [chats, setChats] = useState([]);
  const chatsListRef = useRef(null);

  const [localUser] = useAuthState(auth);

  const [display, setDisplay] = useState("none");
  const [positions, setPositions] = useState({x: 0, y: 0});

  const [deleteChat, setDeleteChat] = useState("");

  const dispatch = useDispatch();

  const findUserButtonHandler = () => {
    dispatch(open());
  };

  useEffect(() => {
    localStorage.setItem("localUser", JSON.stringify(auth.currentUser));
    
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
  }, [localUser]);

  const chatClickHandler = (event) => {
    dispatch(setCurrentChat(event.target.id));
    dispatch(setRender(true));
    dispatch(openChat());
  };

  const contextMenuHandler = async (event) => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100; 
    
    setDisplay("block");

    if (event.pageX > maxX) {
      setPositions({
        x: maxX,
        y: event.pageY,
      })
    } else if (event.pageY > maxY) {
      setPositions({
        x: event.pageX,
        y: maxY,
      })
    } else {
      setPositions({
        x: event.pageX,
        y: event.pageY,
      });
    }

    setDeleteChat(event.target.id);
  };

  const deleteChatForMeButtonHandler = async () => {
    const querySnapshot = await getDocs(collection(db, deleteChat));
    querySnapshot.forEach((docId) => {
      deleteDoc(doc(db, deleteChat, docId.id));
    });

    await deleteDoc(doc(db, localUser.displayName + " chats", deleteChat.replace(localUser.displayName, "")));

    dispatch(setCurrentChat(""));
  };

  const deleteChatForBothButtonHandler = async () => {
    const querySnapshotForCurrentUser = await getDocs(collection(db, deleteChat));
    querySnapshotForCurrentUser.forEach((docId) => {
      deleteDoc(doc(db, deleteChat, docId.id));
    });

    const anotherUser = deleteChat.replace(localUser.displayName, "");

    const querySnapshotForAnotherUser = await getDocs(collection(db,anotherUser + localUser.displayName));
    querySnapshotForAnotherUser.forEach((docId) => {
      deleteDoc(doc(db, anotherUser + localUser.displayName, docId.id));
    });

    await deleteDoc(doc(db, localUser.displayName + " chats", deleteChat.replace(localUser.displayName, "")));
    await deleteDoc(doc(db, anotherUser + " chats", localUser.displayName));

    dispatch(setCurrentChat(""));
  }

  useEffect(() => {
    const handleEvent = () => setDisplay("none");
    window.addEventListener("click", handleEvent);

    const currentRef = chatsListRef.current;
    currentRef.addEventListener("scroll", handleEvent);

    return () => {
      window.removeEventListener("click", handleEvent);
      currentRef.removeEventListener("scroll", handleEvent);
    };
  }, []);

  return (
    <StyledChatsList ref={chatsListRef} onContextMenu={event => event.preventDefault()}>
      <StyledFindUserButton onClick={findUserButtonHandler}>&#9998;</StyledFindUserButton>

      {chats.map((chat) => (
        <StyledChat 
         id={localUser.displayName + chat.name} 
         onClick={chatClickHandler}
         key={localUser.displayName + chat.name}
         onContextMenu={contextMenuHandler}
        >
          <StyledChatImage 
           src={chat.profilePicture} 
           alt="profile" 
           id={localUser.displayName + chat.name}
           onClick={chatClickHandler}
          />
          {chat.name}
        </StyledChat>
      ))}
      <StyledDeleteContainer 
       display={display} 
       top={`${positions.y}px`} 
       left={`${positions.x}px`}
      >
        <StyledDeleteChat onClick={deleteChatForMeButtonHandler} borderRadius={"15px 15px 0px 0px"}>
          Delete for me
        </StyledDeleteChat>
        <StyledDeleteChat onClick={deleteChatForBothButtonHandler} borderRadius={"0px 0px 15px 15px"}>
          Delete for both
        </StyledDeleteChat>
      </StyledDeleteContainer>
    </StyledChatsList>
  );
}