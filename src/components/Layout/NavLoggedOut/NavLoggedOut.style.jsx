import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLoggedOutStyle = styled.nav`
  background: rgba(0, 0, 0, 0);
  backdrop-filter: blur(7px);
  /* height: 80px; */
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

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
`;

export const LogoImg = styled.img`
  max-width: 7em;
  max-height: 7em;
  opacity: 90%;
  transition: ease-in-out 0.3s;
  :hover {
    scale: 90%;
    transition: ease-in-out 0.3s;
  }
`;

export const LinkStyled1 = styled(Link)`
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.blue};
  /* text-transform: uppercase; */
  border-radius: 10px;
  padding: 1em;
  font-weight: 600;
  font-size: large;
  text-align: center;
  opacity: 90%;
  min-width: 3em;
  transition: ease-in-out 0.3s;
  :hover {
    background: white;
    transition: ease-in-out 0.3s;
  }
`;

export const LinkStyled2 = styled(Link)`
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  /* text-transform: uppercase; */
  border-radius: 10px;
  padding: 1em;
  font-weight: 600;
  font-size: large;
  text-align: center;
  opacity: 90%;
  min-width: 4em;
  transition: ease-in-out 0.3s;
  :hover {
    background: ${(props) => props.theme.color.dark};
    color: white;
    transition: ease-in-out 0.3s;
  }
`;
