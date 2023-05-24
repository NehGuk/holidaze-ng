import styled from "styled-components";

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
    list-style: none;
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
    list-style: none;
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
    max-width: 12em;
    padding-right: 2em;
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
  }
`;

///

/* export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.color.blue};

  color: ${(props) => props.theme.color.white};
  width: 100vw;
  display: grid;
  gap: 2em;
  grid-template-areas:
    "logo content1 content2"
    "logo content1 content2"
    "content3 content3 content3";
  grid-template-columns: 0.5fr 0.5fr 2fr;

  @media (max-width: 900px) {
    grid-template-areas:
      "logo"
      "content1"
      "content2"
      "content3";
  }
`;

export const FooterLogo = styled.div`
  
  padding: 3em;
  grid-area: logo;
  display: grid;
  justify-items: end;
  align-items: start;
  > img {
    max-width: 12em;
  }
  @media (max-width: 900px) {
    width: 100%;
    place-content: center;
  }
`;

export const FooterContent1 = styled.div`
  grid-area: content1;
  padding: 3em;
  
  display: grid;

  justify-content: center;
  align-content: start;

  > h3 {
    place-items: center;
  }
`;

export const FooterContent2 = styled.div`
  grid-area: content2;
  padding: 3em;
  
  display: grid;
  justify-content: start;
  align-content: start;

  > p {
    max-width: 400px;
  }
`;

export const FooterContent3 = styled.div`
  grid-area: content3;
  padding: 1em;
  height: 3em;
  background: ${(props) => props.theme.color.dark};
  text-align: center;
  > p {
    font-weight: 400;
  }
`;
 */
