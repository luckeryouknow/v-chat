import { StyledCurrentChat, StyledFindButton, StyledWaitingDiv } from "./StyledCurrentChat";
import Messages from "../Messages/Messages";
import InputMessages from "../InputMessages/InputMessages";
import { open } from "../FindUser/findUserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRender } from "../InputMessages/inputMessagesSlice";
import { selectDisplay } from "./currentChatSlice";
import ExitButton from "../CloseButton/ExitButton";

export default function CurrentChat () {
  const dispatch = useDispatch();
  const render = useSelector(selectRender);
  const display = useSelector(selectDisplay);

  const openHandler = () => {
    dispatch(open());
  };
  
  return (
    <StyledCurrentChat style={{display: display}}>
      <StyledFindButton onClick={openHandler}>&#9998;</StyledFindButton>
      <ExitButton />
      {render? (
        <Messages />
      ): (
        <StyledWaitingDiv></StyledWaitingDiv>
      )}
      <InputMessages />
    </StyledCurrentChat>
  );
}