import { useEffect, useState } from "react";
import { StyledInputMessages, StyledInput, StyledButton } from "./StyledInputMessages";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { selectCurrentChat } from "../CurrentChat/currentChatSlice";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";


export default function InputMessages () {
  const [inputValue, setInputValue] = useState();
  const currentChat = useSelector(selectCurrentChat);

  const [localUser] = useAuthState(auth);

  useEffect(() => {
    localStorage.setItem("localUser", JSON.stringify(auth.currentUser));
  }, []);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const sendButtonHandler = async () => {
    let currentChatCopy = currentChat;
    currentChatCopy = currentChatCopy.replace(localUser.displayName, "");
    
    setInputValue("");

    if (localUser && inputValue !== "" && inputValue !== undefined && currentChat !== "") {
      await addDoc(collection(db, currentChat), {
        message: inputValue,
        userName: localUser.displayName,
        profilePicture: localUser.photoURL,
        createdAt: serverTimestamp(),
      });

      await addDoc(collection(db, currentChatCopy + localUser.displayName), {
        message: inputValue, 
        userName: localUser.displayName,
        profilePicture: localUser.photoURL,
        createdAt: serverTimestamp(),
      });
    };
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendButtonHandler();
    }
  };

  return (
    <StyledInputMessages>
      <StyledInput onChange={inputHandler} value={inputValue} onKeyDown={handleKeyDown} />
      <StyledButton onClick={sendButtonHandler}>Send</StyledButton>
    </StyledInputMessages>
  );
}