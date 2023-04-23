import styled from "styled-components";

export const NavLoggedOutStyle = styled.nav`
  background: darkgreen;
  padding: 1em;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 1em;
  > :nth-child(1) {
    background: green;
  }
  > :nth-child(2) {
    background: green;
    padding: 0.5em;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    > :nth-child(1) {
      background: lightgreen;
    }
    > :nth-child(2) {
      background: lightgreen;
    }
  }
`;

export const LogoImg = styled.img`
  max-width: 9em;
`;
