import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  display: grid;
  grid-template-areas:
    "logo logo logo"
    "built contact about"
    "signature signature signature";
  grid-template-columns: 1.5fr.5fr 1.5fr;

  > div > h3 {
    margin-bottom: 0;
  }

  > div > ul {
    list-style-type: square;
  }

  > div > ul > li {
    margin-top: 1em;
  }

  @media (max-width: 900px) {
    grid-template-areas:
      "logo logo logo"
      "built built built"
      "contact contact contact"
      "about about about"
      "signature signature signature";
  }
`;

export const FooterLogo = styled.div`
  display: grid;
  grid-area: logo;
  place-content: center;
  > img {
    padding-top: 3em;
    max-width: 12em;
  }
`;

export const FooterContent1 = styled.div`
  /* background: green; */
  display: grid;
  justify-content: end;
  padding: 1em;
  grid-area: built;

  > ul {
    padding: 0;
  }

  > ul > li {
    margin-left: 1em;
  }

  @media (max-width: 900px) {
    justify-content: start;
    margin: 0 auto;
    width: 12em;
  }
`;

export const FooterContent2 = styled.div`
  /* background: lightseagreen; */
  display: grid;
  justify-content: center;
  padding: 1em;
  grid-area: contact;

  > ul {
    padding: 0;
  }

  > ul > li {
    margin-left: 1em;
  }

  @media (max-width: 900px) {
    justify-content: start;
    margin: 0 auto;
    width: 12em;
  }
`;

export const FooterContent3 = styled.div`
  /* background: ${(props) => props.theme.color.lightblue}; */
  display: grid;
  justify-content: start;
  padding: 1em;
  grid-area: about;

  > p {
    max-width: 18em;
    padding-right: 2em;
    line-height: 1.5em;
  }

  @media (max-width: 900px) {
    justify-content: start;
    margin: 0 auto;
    width: 12em;
    > p {
      padding-right: 0;
    }
  }
`;

export const FooterContent4 = styled.div`
  background: ${(props) => props.theme.color.dark};
  display: grid;
  place-items: center;
  padding: 1em;
  grid-area: signature;
  > p {
    font-weight: 600;
    width: 12em;
    text-align: center;
  }
`;

export const FooterLink = styled(Link)`
  color: ${(props) => props.theme.color.white};
  transition: ease-in-out 0.2s;
  position: relative;

  :hover {
    position: relative;
    transition: ease-in-out 0.2s;
    font-weight: 600;
    color: white;
  }
`;
