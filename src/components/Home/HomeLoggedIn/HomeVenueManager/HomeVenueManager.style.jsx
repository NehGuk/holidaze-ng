import styled, { css } from "styled-components";
import { House } from "@styled-icons/fa-solid";
import { CalendarCheck } from "@styled-icons/fa-regular";

export const ManagerDashboardArea = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 900px) {
    margin: 0 2em;
  }
  > h1 {
    text-align: center;
  }
`;

export const DashboardGrid = styled.div`
  display: grid;
  gap: 2em;
  grid-template-areas:
    "venues bookings"
    "info info"
    "ctas ctas";
  margin-top: 4em;

  > :nth-child(1) {
    grid-area: venues;

    width: 100%;
  }

  > :nth-child(2) {
    grid-area: bookings;
    width: 100%;
  }

  > :nth-child(3) {
    grid-area: info;
    > h2 {
      font-size: medium;
      text-align: center;
    }
  }

  > :nth-child(4) {
    grid-area: ctas;

    > div {
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    grid-template-areas:
      "venues venues"
      "bookings bookings"
      "info info"
      "ctas ctas";
  }
`;

export const StatsSquare = styled.div`
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  display: grid;
  place-items: start;
  padding: 2em;

  > p > span {
    font-weight: 800;
  }

  ${(props) =>
    props.$secondary &&
    css`
      background: ${(props) => props.theme.color.lightblue};
    `};
`;

export const Area1 = styled.div`
  background: yellow;
`;

export const VenueIcon = styled(House)`
  max-width: 5em;
  color: white;
`;

export const BookingIcon = styled(CalendarCheck)`
  max-width: 4em;
  color: white;
`;
