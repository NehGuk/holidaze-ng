import styled, { css } from "styled-components";

export const ShowBookingsContainer = styled.div`
  /* background: green; */
  /* text-align: center; */
  margin-bottom: 2em;
  display: grid;
  place-items: center;
`;

export const CalendarContainer = styled.div`
  /* background: ${(props) => props.theme.color.lightblue}; */
  /* border-radius: 10px; */
  display: grid;
  place-items: center;
  /* padding: 0.5em; */
  /* margin: 0 auto; */
`;

export const BookButtonArea = styled.div`
  /* background: green; */
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
      /* background: ${(props) => props.theme.color.blue}; */
      border: solid 2px ${(props) => props.theme.color.shade};
      padding: 1em;
      border-radius: 5px;
      /* margin: 1em 3em; */
    `};
`;
