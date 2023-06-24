import ChatsList from "../ChatsList/ChatsList";
import CurrentChat from "../CurrentChat/CurrentChat";
import { StyledChat } from "./StyledChat";

export default function Chat () {
  return (
    <StyledChat>
      <ChatsList />
      <CurrentChat />
    </StyledChat>
  );
}