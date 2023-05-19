import styled, { css } from "styled-components";

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
