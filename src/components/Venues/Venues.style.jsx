import styled from "styled-components";

export const VenuesListContainer = styled.div`
  > div {
    padding-top: 12em;
    padding-bottom: 1em;
  }
`;

export const VenueListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  padding: 1em;
  max-width: 1200px;
  margin: 0 auto;

  /* background: lightgreen; */
  img {
    max-width: 12em;
  }

  @media (min-width: 2300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const VenueCard = styled.div`
  /* display: none; */
  background: green;
  border: solid 0.5em darkgreen;
`;
