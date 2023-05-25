import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
`;

export const Sform = styled.form`
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
`;

export const FormDesc = styled.div`
  grid-area: desc;
`;

export const FormMedia = styled.div`
  grid-area: media;
`;

export const FormPrice = styled.div`
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
  background: ${(props) => props.theme.color.lightblue};

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
`;

export const FormCity = styled.div`
  grid-area: city;
`;

export const FormCountry = styled.div`
  grid-area: country;
`;

export const CTAs = styled.div`
  grid-area: ctas;
`;
