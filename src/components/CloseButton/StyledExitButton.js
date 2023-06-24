import { styled } from "styled-components";

export const StyledExitButton = styled.button`
  display: none;
  margin: 0 15px 0 auto;
  border: none;
  font-size: 40px;
  background: none;
  outline: none;
  color: #501DFF;
  cursor: pointer;

  @media(max-width: 800px) {
    & {
      display: block;
    }
  }
`;