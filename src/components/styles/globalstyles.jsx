import styled from "styled-components";

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
