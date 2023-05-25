import styled from "styled-components";
import { Close } from "@styled-icons/material/Close";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.color.lightblue};
  width: 100vw;
  height: 100vh;
`;

export const ModalCloseIcon = styled(Close)`
  max-width: 3em;
  position: absolute;
  top: 5%;
  right: 2%;
  z-index: 999;
  color: ${(props) => props.theme.color.white};
  scale: 60%;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  gap: 1em;

  > div > h1 {
    color: ${(props) => props.theme.color.white};
    text-transform: capitalize;
  }

  > :nth-child(2) {
    text-align: center;
    > span {
      text-transform: uppercase;
      font-size: small;
      margin-bottom: 0;
      color: ${(props) => props.theme.color.white};
    }
    > p {
      margin-top: 0.3em;
      font-size: larger;
      color: ${(props) => props.theme.color.white};
    }
  }

  > :nth-child(3) {
    display: grid;
    gap: 1em;
  }
`;
