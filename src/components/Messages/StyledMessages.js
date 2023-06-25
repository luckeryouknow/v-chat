import { styled } from "styled-components";

export const StyledMessages = styled.div`
  display: block;
  width: 100%;
  height: calc(100vh - 112px);
  overflow-y: auto;

  @media(max-width: 800px) {
    height: calc(100vh - 122px);
  }
`;

export const StyledCurrentUserMessage = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  flex-direction: row-reverse;
`;

export const StyledUserMessage = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const StyledImage = styled.img`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const StyledCurrentName = styled.div`
  margin-right: 5px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(51, 71, 91);
  line-height: 24px;
  text-align: right;
`;

export const StyledName = styled.div`
  margin-left: 5px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(51, 71, 91);
  line-height: 24px;
  text-align: left;
`;

export const StyledMessageText = styled.div`
  position: relative;
  padding: 5px 15px;
  margin-left: 5px;
  min-height: 32px;
  word-break: break-word;
  box-sizing: border-box;
  border-style: solid;
  border-width: 0px;
  border-color: rgb(203, 214, 226);
  background-color: rgb(234, 240, 246);
  color: rgb(66, 91, 118);
  border-radius: 0px 8px 8px;
  max-width: 500px;
  text-align: left;

  @media(max-width: 600px) {
    & {
      max-width: 350px;
    }
  }

  @media(max-width: 425px) {
    & {
      max-width: 300px;
    }
  }

  @media(max-width: 375px) {
    & {
      max-width: 200px;
    }
  }
`;

export const StyledUserMessageText = styled.div`
  padding: 5px 15px;
  margin-right: 5px;
  position: relative;
  min-height: 32px;
  word-break: break-word;
  box-sizing: border-box;
  border-style: solid;
  border-width: 0px;
  border-color: rgba(0, 0, 0, 0.2);
  background-color: rgb(80, 29, 255);
  color: rgb(255, 255, 255);
  border-radius: 8px 0px 8px 8px;
  max-width: 500px;
  text-align: left;

  @media(max-width: 600px) {
    & {
      max-width: 350px;
    }
  }

  @media(max-width: 425px) {
    & {
      max-width: 300px;
    }
  }

  @media(max-width: 375px) {
    & {
      max-width: 200px;
    }
  }
`;