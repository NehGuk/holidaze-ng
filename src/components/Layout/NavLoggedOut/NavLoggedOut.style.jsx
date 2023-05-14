import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLoggedOutStyle = styled.nav`
  background: #eaf5fb;

  min-height: 3em;
  padding: 1em;
  display: grid;
  grid-template-columns: 1.6fr 0.4fr;
  gap: 1em;
  align-items: center;
  > :nth-child(1) {
    /* border: solid 3px green; */
  }
  > :nth-child(2) {
    /* background: green; */
    /* border: solid 2px grey; */
    padding: 0.5em;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    > :nth-child(1) {
      /* border: solid 3px green; */
      /* background: lightgreen; */
      font-weight: 400;
    }
    > :nth-child(2) {
      /* border: solid 3px green; */
      /* background: lightgreen; */
      font-weight: 600;
    }
  }
`;

export const LogoImg = styled.img`
  max-width: 9em;
  max-height: 5em;
`;

export const LinkStyled1 = styled(Link)`
  background: #5879a2;
  color: #eaf5fb;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 1em;
`;

export const LinkStyled2 = styled(Link)`
  background: #293d51;
  color: #eaf5fb;
  text-transform: uppercase;
  border-radius: 10px;
  padding: 1em;
`;
