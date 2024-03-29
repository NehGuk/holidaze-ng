import styled from "styled-components";
import { TravelExplore } from "@styled-icons/material";

export const GreetingArea = styled.div`
  padding: 2em;
  text-align: center;

  @media (max-width: 600px) {
    margin: -3em auto 0 auto;
  }
`;

export const GlobeIcon = styled(TravelExplore)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 5em;
`;

export const VenuesListContainer = styled.div`
  > div {
    padding-top: 2em;
    padding-bottom: 1em;
  }
`;

export const VenueListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5em;
  padding: 1em;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 2300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: 1200px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 2em;
    max-width: 300px;
  }
`;

export const VenueCard = styled.div`
  background: ${(props) => props.theme.color.white};
  border-radius: 10px;
  min-height: 33em;

  word-break: break-word;
  display: grid;
  grid-template-areas:
    "cardimg cardimg"
    "title title"
    "rating rating"
    "guests guests"
    "city city"
    "country country"
    "price cta";
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: ease-in-out 0.2s;

  filter: none;
  -webkit-filter: grayscale(50%);
  -moz-filter: grayscale(50%);
  -ms-filter: grayscale(50%);
  -o-filter: grayscale(50%);
  :hover {
    scale: 1.01;
    transition: ease-in-out 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

    filter: none;
    -webkit-filter: grayscale(0%);
    -moz-filter: grayscale(0%);
    -ms-filter: grayscale(0%);
    -o-filter: grayscale(0%);
  }
`;

export const VenueCardImg = styled.img`
  grid-area: cardimg;
  height: 12em;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const VenueCardTitle = styled.div`
  grid-area: title;
  padding: 0 1em;
  margin: 0;
  text-transform: capitalize;

  > a > h2 {
    margin: 0;
    overflow-wrap: break-word;
    color: ${(props) => props.theme.color.blue};
    text-transform: capitalize;
  }
`;

export const VenueCardRating = styled.div`
  grid-area: rating;
  padding: 0 1em;
  margin: 0;
`;

export const VenueCardCountry = styled.div`
  grid-area: country;
  padding: 0 1em;
  > p {
    margin: 0;
  }
`;

export const VenueCardCity = styled.div`
  grid-area: city;
  padding: 0 1em;
  margin: 0;
  > p {
    margin: 0;
  }
`;

export const VenueCardGuests = styled.div`
  grid-area: guests;
  padding: 0 1em;
  margin: 0 0 1em 0;
  > p {
    margin: 0;
  }
`;

export const VenueCardPrice = styled.div`
  grid-area: price;
  padding: 1em;
  align-self: self-end;
  > h4 {
    margin-bottom: 0.5em;
    font-size: x-large;
  }
`;

export const VenueCardCTA = styled.div`
  padding: 0 1em;
  margin: 0 0 2em 0;
  justify-self: end;
  align-self: self-end;
`;

export const FilterButtonsArea = styled.div`
  padding-top: 10em;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 2300px) {
    max-width: 1200px;
  }
`;

export const FilterBigButton = styled.button`
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.blue};
  width: 100%;
  border: none;
  border-radius: 7px;
  padding: 1em 2em;
  margin-bottom: 0.3em;
  transition: ease-in-out 0.2s;
  font-weight: 600;
  :hover {
    transition: ease-in-out 0.2s;
    background: white;
    font-weight: 600;
  }
  @media (max-width: 950px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Filters = styled.div`
  margin-top: 1em;
  > button {
    border: none;
    border-radius: 7px;
    margin: 0.3em 0.3em;
    padding: 1em 1em;
    font-size: small;
    background: ${(props) => props.theme.color.blue};
    background: ${(props) => props.theme.color.white};
    transition: ease-in-out 0.2s;
    :hover {
      transition: ease-in-out 0.2s;
      background: white;
    }
  }
  @media (max-width: 950px) {
    display: grid;
    > button {
      border-radius: 0px;
      margin: 0;
    }
  }
`;
