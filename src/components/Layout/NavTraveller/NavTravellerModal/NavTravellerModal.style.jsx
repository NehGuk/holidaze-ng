import styled from "styled-components";
import { Close } from "@styled-icons/material/Close";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 0; */

  background: lightgrey;
  width: 60vw;
  height: 100vh;
`;

export const ModalCloseIcon = styled(Close)`
  max-width: 3em;
  position: absolute;
  top: 5%;
  right: 2%;
`;

export const ModalContent = styled.div`
  background: lightpink;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
