import styled from "styled-components";
import { Star } from "@styled-icons/fa-solid";
import { Car } from "@styled-icons/boxicons-solid";
import { Wifi } from "@styled-icons/heroicons-solid";
import { FreeBreakfast } from "@styled-icons/material";
import { Pets } from "@styled-icons/material";

export const BookingTravellerContainer = styled.div`
  img {
    max-width: 200px;
  }
`;

export const VenueContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;
  gap: 1em;

  img {
    width: 100%;
    max-height: 20em;
    object-fit: cover;
    border-radius: 10px;
  }

  > div > h4 {
    text-align: center;
  }
`;

export const AreaNav = styled.div`
  width: 60%;
  margin: 0 auto;
  > a {
    display: block;
    text-align: center;
    margin-top: 1em;
  }
`;

export const Area1 = styled.div`
  max-width: 100%;
  margin: 2em 0 2em 0;
  padding: 2em;
  border-radius: 10px;
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  display: grid;
  place-items: start;

  > h2 {
    margin-bottom: 0;
    color: ${(props) => props.theme.color.white};
    text-transform: capitalize;
  }

  > p {
    margin-bottom: 0;
  }

  > p > span {
    font-size: small;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export const Area2 = styled.div`
  max-width: 100%;
  margin: 2em 0 2em 0;
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.blue};
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: start;

  > h2 {
    margin-bottom: 0;
  }

  > h3 {
    margin-bottom: 0;
  }

  > p {
    margin-bottom: 0;
  }

  > p > span {
    font-size: small;
    font-weight: 800;
    text-transform: uppercase;
  }

  > div {
    p {
      text-transform: uppercase;
      font-weight: 600;
      font-size: small;
      color: ${(props) => props.theme.color.shade};
      margin: 0.2em 0 2em 0;
    }
  }
`;

export const StarIcon = styled(Star)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 3em;
  display: block;
`;

export const ParkingIcon = styled(Car)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 2em;
  display: block;
`;

export const WifiIcon = styled(Wifi)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 2em;
  display: block;
`;

export const BreakfastIcon = styled(FreeBreakfast)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 2em;
  display: block;
`;

export const PetsIcon = styled(Pets)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 2em;
  display: block;
`;
