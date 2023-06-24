import { styled } from "styled-components";

export const StyledChatsList = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #F4F2ED;
  overflow-y: auto;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

export const StyledFindUserButton = styled.button`
  display: none;
  margin: 0 15px 0 auto;
  border: none;
  font-size: 40px;
  background: none;
  outline: none;
  color: #501DFF;
  cursor: pointer;
  font-varient-emoji: text;

  @media(max-width: 800px) {
    & {
      display: block;
    }
  }
`;

export const StyledChat = styled.div`
  display: flex;
  padding: 15px 10px;
  cursor: pointer;
  color: #13044F;
  transition: 0.5s;


  &:hover {
    background-color: #C5C3DC;
  }
`;

export const StyledChatImage = styled.img`
  display: block;
  width: 70px;
  border-radius: 50%;
`;

export const StyledChatName = styled.div`
  margin: auto 0 auto 10px;
`;