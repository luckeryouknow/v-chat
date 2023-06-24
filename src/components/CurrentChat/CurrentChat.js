import { StyledCurrentChat, StyledFindButton, StyledWaitingDiv } from "./StyledCurrentChat";
import Messages from "../Messages/Messages";
import InputMessages from "../InputMessages/InputMessages";
import { open } from "../FindUser/findUserSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRender } from "../InputMessages/inputMessagesSlice";
import { selectDisplay } from "./currentChatSlice";
import ExitButton from "../CloseButton/ExitButton";
import { useEffect, useState } from "react";

export default function CurrentChat () {
  const dispatch = useDispatch();
  const render = useSelector(selectRender);
  const display = useSelector(selectDisplay);

  const openHandler = () => {
    dispatch(open());
  };

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const contentHandler = () => {
    if (windowSize.innerWidth <= 800) {
      return (
        <StyledCurrentChat style={{display: display}}>
          <ExitButton />
          {render? (
            <Messages />
          ): (
            <StyledWaitingDiv></StyledWaitingDiv>
          )}
          <InputMessages />
        </StyledCurrentChat>
      );
    } else {
      return (
        <StyledCurrentChat style={{display: "block"}}>
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
  }

  return (
    <>
      {contentHandler()}
    </>
  );
}