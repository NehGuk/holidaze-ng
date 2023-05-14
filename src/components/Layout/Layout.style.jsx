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

export const NavStyled = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const OutletGrid = styled.div`
  padding-top: 9em;
  padding-bottom: 5em;
  max-width: 1200px;
  /* min-width: 70vw; */
  /* margin: 0 auto; */
`;
