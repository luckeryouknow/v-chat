import { styled } from "styled-components";

export const StyledCurrentChat = styled.div`
  display: block;
  width: calc(100% - 300px);
  height: 100vh;
  background-color: #F8F8F8;

  @media(max-width: 800px) {
    & {
      width: 100%;
      position: absolute;
    }
  }
`;

export const StyledFindButton = styled.button`
  display: block;
  margin: 0 15px 0 auto;
  border: none;
  font-size: 30px;
  background: none;
  outline: none;
  color: #501DFF;
  cursor: pointer;

  @media(max-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const StyledWaitingDiv = styled.div`
  display: block;
  width: 100%;
  height: calc(100vh - 102px);
`;