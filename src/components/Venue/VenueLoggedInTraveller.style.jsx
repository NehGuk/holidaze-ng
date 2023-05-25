import styled from "styled-components";
import { Star } from "@styled-icons/fa-solid";
import { Car } from "@styled-icons/boxicons-solid";
import { Wifi } from "@styled-icons/heroicons-solid";
import { FreeBreakfast } from "@styled-icons/material";
import { Pets } from "@styled-icons/material";

export const VenueContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;
  gap: 1em;

  > h1 {
    text-transform: capitalize;
  }

  img {
    width: 100%;
    max-height: 20em;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const StarIcon = styled(Star)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 3em;
`;

export const ParkingIcon = styled(Car)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 3em;
`;

export const WifiIcon = styled(Wifi)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 3em;
`;

export const BreakfastIcon = styled(FreeBreakfast)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 3em;
`;

export const PetsIcon = styled(Pets)`
  color: ${(props) => props.theme.color.lightblue};
  max-width: 3em;
`;

export const Area1 = styled.div`
  background: ${(props) => props.theme.color.blue};
  max-width: 100%;
  height: 6em;
  border-radius: 10px;
  display: grid;
  place-items: center;
  > p,
  p span {
    color: white;
  }
`;

export const Area2 = styled.div`
  margin-top: 2em;
  background: ${(props) => props.theme.color.white};
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1em;
  display: grid;
  place-items: center;
  text-align: center;

  > h2 {
    color: ${(props) => props.theme.color.blue};
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

export const Area3 = styled.div`
  margin-top: 2em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  border-radius: 10px;
  padding: 2em 3em;

  > h2 {
    margin-bottom: 0em;
  }
  > p {
    margin: 0;
  }
`;

export const Area4 = styled.div`
  margin-top: 2em;
  max-width: 100%;
  border-radius: 10px;
  padding: 1em;
  display: grid;
  place-items: center;
`;

export const AreaCTAs = styled.div`
  margin-top: 2em;
  max-width: 100%;
  border-radius: 10px;
  padding: 1em;
  display: grid;
  gap: 1em;
  text-align: center;
  > div > a {
    display: grid;
    gap: 1em;
  }
`;
