import styled from "styled-components";
import { Menu } from "@styled-icons/material/Menu";

export const NavVenueManagerStyle = styled.nav`
  background: yellow;
  padding: 1em;
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 1em;
  > :nth-child(1) {
    background: lightsalmon;
  }
  > :nth-child(2) {
    background: lightcyan;
    padding: 0.5em;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;

    > :nth-child(1) {
      background: lightcoral;
      border: solid 1px green;
    }
    > :nth-child(2) {
      background: lightcoral;
      border: solid 1px green;
    }
    > :nth-child(3) {
      background: lightcoral;
      border: solid 1px green;
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

export const HamburgerMenu = styled(Menu)`
  max-width: 2em;
  min-width: 2em;
`;
