import { StyledAuthentication, StyledLetter, StyledChat, StyledSignInButton } from "./StyledAuthentication";
import { auth, db } from "../../firebase";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { close, selectAuthenticationMargin } from "../Authentication/authenticationSlice";
import { useSelector, useDispatch } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function Authentication () {
  const dispatch = useDispatch();
  const margin = useSelector(selectAuthenticationMargin);

  const [localUser, setLocalUser] = useState();

  const signInHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    
    setLocalUser(auth.currentUser);

    dispatch(close());
  };

  onAuthStateChanged(auth, () => {
    if (localUser) {
      setDoc(doc(db, "users", localUser.displayName), {
        name: localUser.displayName, 
        email: localUser.email,
        userPhoto: localUser.photoURL
      })
    }
  });

  return (
    <StyledAuthentication marginTopProp={margin}>
      <StyledLetter>V-<StyledChat>Chat</StyledChat></StyledLetter>
      <StyledSignInButton onClick={signInHandler}>Sign In</StyledSignInButton>
    </StyledAuthentication>
  );
}