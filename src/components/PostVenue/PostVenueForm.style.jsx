import styled from "styled-components";

export const FormContainer = styled.div`
  /* background: lightseagreen; */
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
`;

export const Sform = styled.form`
  /* background: lightgoldenrodyellow; */
  display: grid;
  grid-template-areas:
    "name name"
    "desc desc"
    "media media"
    "price guests"
    "facilities facilities"
    "address city"
    "country country"
    "ctas ctas";
  gap: 1em;

  > div {
    display: grid;
    /* width: 100%; */
  }

  > div > p {
    margin-top: 0.7em;
  }
  > div > textarea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    opacity: 90%;
  }

  @media (max-width: 650px) {
    grid-template-areas:
      "name name"
      "desc desc"
      "media media"
      "price price"
      "guests guests"
      "facilities facilities"
      "address address"
      "city city"
      "country country"
      "ctas ctas";
  }
`;

export const FormName = styled.div`
  grid-area: name;
  /* background: green; */
`;

export const FormDesc = styled.div`
  grid-area: desc;
  /* background: green; */
`;

export const FormMedia = styled.div`
  grid-area: media;
  /* background: green; */
`;

export const FormPrice = styled.div`
  /* background: green; */
  grid-area: price;

  > label > h3 {
    color: ${(props) => props.theme.color.blue};
  }
`;

export const FormGuests = styled.div`
  grid-area: guests;

  > label > h3 {
    color: ${(props) => props.theme.color.blue};
  }
`;

export const FormFacilities = styled.div`
  grid-area: facilities;
  background: ${(props) => props.theme.color.blue};

  border-radius: 10px;
  margin: 1em 0;
  padding: 2em;
  display: grid;

  place-content: center;

  > div > h3 {
    color: ${(props) => props.theme.color.white};
  }

  > div {
    margin-bottom: 1em;
  }
  > div > label {
    font-size: medium;
    font-weight: 600;
    text-transform: uppercase;
    padding-left: 1em;
    color: ${(props) => props.theme.color.white};
  }

  > div > input[type="checkbox"] {
    height: 2em;
    width: 2em;
    vertical-align: -0.5em;
  }
`;

export const FormAddress = styled.div`
  grid-area: address;
  /* background: green; */
`;

export const FormCity = styled.div`
  grid-area: city;
  /* background: green; */
`;

export const FormCountry = styled.div`
  grid-area: country;
  /* background: green; */
`;

export const CTAs = styled.div`
  grid-area: ctas;
  /* background: green; */
`;
