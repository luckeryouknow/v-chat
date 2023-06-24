import { StyledExitButton } from "./StyledExitButton";
import { useDispatch } from "react-redux";
import { closeChat } from "../CurrentChat/currentChatSlice";

export default function ExitButton () {
  const dispatch = useDispatch();
  
  const closeHandler = () => {
    dispatch(closeChat());
  };
  
  return(
    <StyledExitButton onClick={closeHandler}>&#10094;</StyledExitButton>
  );
}