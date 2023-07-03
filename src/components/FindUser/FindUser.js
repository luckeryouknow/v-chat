import { StyledButton, StyledContainer, StyledFindUser, StyledInput, StyledButtonsContainer } from "./StyledFindUser";
import { useSelector, useDispatch } from "react-redux";
import { close, setInputValue } from "./findUserSlice";
import { selectFindUserMargin, selectInputValue } from "./findUserSlice";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function FindUser () {
  const [localUser] = useAuthState(auth);

  const margin = useSelector(selectFindUserMargin);
  const inputValue = useSelector(selectInputValue);
  const dispatch = useDispatch();

  const findUser = async () => {
    if (inputValue === "") {
      alert("enter the user nickname")
    };

    let docRef = doc(db, "users", inputValue);
    let docSnap = await getDoc(docRef);

    if (docSnap.exists() && docSnap.data().name !== localUser.displayName && inputValue !== localUser.displayName) {
      await setDoc(doc(db, localUser.displayName + " chats", inputValue), {
        name: inputValue,
        email: docSnap.data().email,
        profilePicture: docSnap.data().userPhoto,
      });

      await setDoc(doc(db, inputValue + " chats", localUser.displayName), {
        name: localUser.displayName,
        email: localUser.email,
        profilePicture: localUser.photoURL,
      });
    }
    else if (docSnap.exists() && docSnap.data().name === localUser.displayName) {
      alert("you are trying to find yourself");
    } else {
      alert("user is not found");
    };
  };

  const closeButtonHandler = () => {
    dispatch(close());
  };

  const findButtonHandler = () => {
    dispatch(close());
    findUser();
  };

  const findUserInputHandler = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  useEffect(() => {
    localStorage.setItem("localUser", JSON.stringify(auth.currentUser));
  }, []);
  
  return (
    <StyledFindUser margin={margin}>
      <StyledContainer>
        <StyledInput onChange={findUserInputHandler}></StyledInput>
        <StyledButtonsContainer>
          <StyledButton onClick={closeButtonHandler}>Close</StyledButton>
          <StyledButton onClick={findButtonHandler}>Find</StyledButton>
        </StyledButtonsContainer>
      </StyledContainer>
    </StyledFindUser>
  );
}