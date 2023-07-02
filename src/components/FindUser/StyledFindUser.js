import { styled } from "styled-components";

export const StyledFindUser = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  margin-top: ${props => props.margin || "0vh"};
  position: absolute;
  z-index: 2;
  top: 0%;
  background-color: #D5E0E3;
  transition: 0.5s;
`;

export const StyledContainer = styled.div`
  display: block;
  width: 400px;
  position: absolute;
  left: calc(50% - 200px);
  right: calc(50% - 200px);
  top: 50%;
  bottom: 50%;

  @media(max-width: 850px) {
    & {
      width: 75%;
      left: 12.5%;
      right: 12.5%;
    }
  }

  @media(max-width: 600px) {
    & {
      width: 90%;
      left: 5%;
      right: 5%;
    }
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 400px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #501DFF;
  font-size: 18px;
  text-align: center;
  background-color: #D5E0E3;
  color: #13044F;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-bottom: 1.5px solid #AEB1FF;
  }

  @media (max-width: 850px) {
    & {
      width: 100%;
    }
  }
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  width: 400px;
  margin: 20px auto 0 auto;

  @media (max-width: 850px) {
    & {
      width: 100%;
    }
  }
`;

export const StyledButton = styled.button`
  display: block;
  width: 175px;
  height: 40px;
  margin: 20px auto 0 auto;
  border: none;
  background-color: #501DFF;
  color: white;
  line-height: 40px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #AEB1FF;
  }

  @media (max-width: 850px) {
    & {
      width: 40%;
    }
  }
`;