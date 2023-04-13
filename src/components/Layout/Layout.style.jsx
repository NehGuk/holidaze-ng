import styled from "styled-components";

export const MainGrid = styled.div`
  display: grid;
  grid-template-areas:
    "nav"
    "main"
    "footer";
  > :nth-child(1) {
    grid-area: nav;
  }
  > :nth-child(2) {
    grid-area: main;
    min-height: 80vh;
  }
  > :nth-child(3) {
    grid-area: footer;
  }
`;
