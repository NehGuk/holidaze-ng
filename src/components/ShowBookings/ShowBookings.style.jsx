import styled, { css } from "styled-components";

export const ShowBookingsContainer = styled.div`
  margin-bottom: 2em;
  display: grid;
  place-items: center;
`;

export const CalendarContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const BookButtonArea = styled.div`
  margin-top: 2em;
  display: grid;
  place-items: center;
`;

export const BookingMessageParagraph = styled.p`
  text-align: center;
  color: ${(props) => props.theme.color.lightblue};
  text-transform: uppercase;
  font-size: smaller;
  font-weight: 800;

  ${(props) =>
    props.$warning &&
    css`
      color: ${(props) => props.theme.color.blue};
      border: solid 2px ${(props) => props.theme.color.shade};
      padding: 1em;
      border-radius: 5px;
    `};
`;
