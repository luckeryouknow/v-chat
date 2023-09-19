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
  align-items: center;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;


  &:hover {
    background-color: #C5C3DC;
  }
`;

export const StyledChatImage = styled.img`
  display: block;
  width: 70px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const StyledDeleteContainer = styled.div`
  display: ${props => props.display};
  top: ${props => props.top};
  left: ${props => props.left};
  position: absolute;
  width: 200px;
  border-radius: 15px;
  z-index: 1;
`;

export const StyledDeleteChat = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  background-color: #FFFFFF;
  border-radius: ${props => props.borderradius};
  color: black;
  cursor: pointer;
  z-index: 1;
  transition: 1s ease;

  &:hover {
    background-color: #bf1313;
    color: white;
  }
`;