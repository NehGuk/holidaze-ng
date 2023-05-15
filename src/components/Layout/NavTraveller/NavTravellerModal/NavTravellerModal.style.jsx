import styled from "styled-components";
import { Close } from "@styled-icons/material/Close";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 0; */
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  /* left: 0; */

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
  /* background: lightpink; */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  place-items: center;
  gap: 1em;

  /* border: solid 1em white; */

  > :nth-child(1) {
    /* border: solid green 0.3em; */

    /* display: flex;
    justify-content: center;
    align-items: center; */

    > img {
      width: 7em;
      height: 7em;
      border: 0.3em solid #293d51;
      border-radius: 50%;
      object-fit: cover;

      @media (min-width: 600px) {
        width: 9em;
        height: 9em;
      }
    }
  }

  > :nth-child(2) {
    /* border: solid green 0.3em; */
    text-align: center;
    > span {
      text-transform: uppercase;
      font-size: small;
      margin-bottom: 0;
      color: ${(props) => props.theme.color.blue};
    }
    > p {
      margin-top: 0.3em;
      font-size: larger;
      color: ${(props) => props.theme.color.white};
    }
  }

  > :nth-child(3) {
    /* border: solid green 0.3em; */
    display: grid;
    gap: 1em;
    > button {
      background: #d4e4e8;
      border: none;
      padding: 1em 3em;
      color: #293d51;
      cursor: pointer;
      font-weight: 600;
      border-radius: 5px;
      :hover {
        background: white;
      }
      @media (min-width: 600px) {
        min-width: 400px;
      }
    }
  }
`;
