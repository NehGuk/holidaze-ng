import styled from "styled-components";
import { Close } from "@styled-icons/material/Close";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 0; */
  background: black;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 0; */

  background: lightgrey;

  width: 100vw;
  height: 100vh;
`;

export const ModalCloseIcon = styled(Close)`
  max-width: 3em;
  position: absolute;
  top: 5%;
  right: 2%;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: lightpink;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AvatarImg = styled.img`
  max-width: 7em;
  border-radius: 50%;
`;
