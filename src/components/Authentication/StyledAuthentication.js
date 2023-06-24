import { styled } from "styled-components";

export const StyledAuthentication = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  margin-top: ${props => props.marginTopProp || "0vh"};
  position: absolute;
  z-index: 1;
  background-color: #D5E0E3;
  font-family: sans-serif;
  font-weight: 500;
  transition: 0.5s;
`;

export const StyledLetter = styled.div`
  display: block;
  margin-top: 250px;
  text-align: center;
  font-size: 100px;
  color: #501DFF;
`;

export const StyledChat = styled.span`
  text-align: center;
  color: #13044F;
  font-size: 76px;
`;

export const StyledSignInButton = styled.div`
  display: block;
  width: 175px;
  height: 40px;
  margin: 50px auto 0 auto;
  background-color: #501DFF;
  color: white;
  line-height: 40px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #AEB1FF;
  }
`;