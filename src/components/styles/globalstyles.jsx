import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SimgAvatarMenu = styled.img`
  width: 7em;
  height: 7em;
  border: 0.3em solid ${(props) => props.theme.color.blue};
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 600px) {
    width: 9em;
    height: 9em;
  }
`;

// modal buttons
export const Sbutton = styled.button`
  background: ${(props) => props.theme.color.white};
  border: none;
  padding: 1em 3em;
  color: ${(props) => props.theme.color.blue};
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  :hover {
    background: white;
  }

  ${(props) =>
    props.$negative &&
    css`
      background: ${(props) => props.theme.color.shade};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.dark};
      }
    `};

  @media (min-width: 600px) {
    min-width: 400px;
  }
`;

// regular buttons
export const SRegButton = styled.button`
  background: ${(props) => props.theme.color.lightblue};
  border: none;
  padding: 1em 3em;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  :hover {
    transition: ease-in-out 0.2s;
    background: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.white};
  }

  ${(props) =>
    props.$negative &&
    css`
      background: ${(props) => props.theme.color.shade};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.dark};
      }
    `};

  @media (min-width: 600px) {
    /* min-width: 3em; */
  }
`;

// link buttons
export const SLinkButton = styled(Link)`
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  font-size: medium;
  font-weight: 600;
  padding: 1em 2em;
  border-radius: 7px;
  transition: ease-in-out 0.2s;
  :hover {
    transition: ease-in-out 0.2s;
    background: ${(props) => props.theme.color.dark};
    color: ${(props) => props.theme.color.white};
  }

  ${(props) =>
    props.$green &&
    css`
      background: ${(props) => props.theme.color.green};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.darkgreen};
      }
    `};

  ${(props) =>
    props.$dark &&
    css`
      background: ${(props) => props.theme.color.dark};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.shade};
      }
    `};

  ${(props) =>
    props.$lightblue &&
    css`
      background: ${(props) => props.theme.color.lightblue};
      color: white;
      :hover {
        color: white;
        background: ${(props) => props.theme.color.blue};
      }
    `};
`;

// typography
export const Sh2CardTitle = styled.h2`
  color: ${(props) => props.theme.color.blue};
  padding-bottom: 1em;
`;

export const SSpanTitle = styled.span`
  color: ${(props) => props.theme.color.lightblue};
  text-transform: uppercase;
  font-size: smaller;
  font-weight: 800;
`;
