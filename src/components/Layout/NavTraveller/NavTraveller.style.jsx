import styled from "styled-components";
import { Menu } from "@styled-icons/material/Menu";

export const NavTravellerStyle = styled.nav`
  background: #eaf5fb;
  min-height: 80px;
  padding: 1em 0.1em 1em 1em;
  display: grid;
  grid-template-columns: 1.6fr 0.4fr;
  gap: 1em;
  align-items: center;
  > :nth-child(1) {
    /* background: lightgreen; */
    /* border: solid 3px blue; */
  }
  > :nth-child(2) {
    /* background: lightcyan; */
    /* border: solid 3px blue; */
    /* padding: 1em; */
    > p {
      color: ${(props) => props.theme.color.blue};
      font-weight: 600;
      font-size: small;
    }

    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;

    > :nth-child(1) {
      /* background: red; */
      /* border: solid 3px white; */
    }
    > :nth-child(2) {
      /* background: lightgreen; */
      /* border: solid 3px blue; */

      img {
        height: 2em;
        width: 2em;
        border: 0.2em solid #5879a2;
        object-fit: cover;
      }
    }
    > :nth-child(3) {
      /* background: lightgreen; */
      /* border: solid 3px blue; */
    }
    > button {
      background: none;
      border: none;
      cursor: pointer;
    }
    @media (max-width: 600px) {
      > :nth-child(1) {
        display: none;
      }
    }
  }
  @media (min-width: 900px) {
    grid-template-columns: 1.9fr 0.1fr;
  }
`;

export const LogoImg = styled.img`
  max-width: 9em;
  max-height: 5em;
`;

export const AvatarImg = styled.img`
  max-width: 3em;
  border-radius: 50%;
`;

export const HamburgerMenu = styled(Menu)`
  max-width: 2em;
  min-width: 2em;
  margin-right: 2em;
`;
