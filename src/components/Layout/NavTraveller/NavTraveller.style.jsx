import styled from "styled-components";

export const NavTravellerStyle = styled.nav`
  background: lightgray;
  padding: 1em;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 1em;
  > :nth-child(1) {
    background: lightgreen;
  }
  > :nth-child(2) {
    background: lightseagreen;
    padding: 0.5em;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    > :nth-child(1) {
      background: lightcoral;
    }
    > :nth-child(2) {
      background: lightskyblue;
    }
  }
`;

export const LogoImg = styled.img`
  max-width: 9em;
`;

export const AvatarImg = styled.img`
  max-width: 3em;
  border-radius: 50%;
`;
