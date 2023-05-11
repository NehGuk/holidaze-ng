import styled from "styled-components";

export const VenuesListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2em;
  padding: 2em;

  background: lightgreen;
  img {
    max-width: 12em;
  }
`;

export const VenueCard = styled.div`
  /* display: none; */
  background: green;
  border: solid 0.5em darkgreen;
`;
