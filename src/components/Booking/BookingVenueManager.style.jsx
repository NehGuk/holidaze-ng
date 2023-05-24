import styled from "styled-components";

export const BookingVenueManagerContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2em;

  img {
    width: 100%;
    max-height: 20em;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const BookingDetails = styled.div`
  background: ${(props) => props.theme.color.shade};
  border-radius: 10px;
  padding: 2em;
  margin-bottom: 2em;

  > p {
    color: ${(props) => props.theme.color.white};
  }

  > p > span {
    font-size: small;
    font-weight: 800;
  }
`;

export const GuestDetails = styled.div`
  background: ${(props) => props.theme.color.white};

  border-radius: 10px;
  padding: 2em;
  margin-bottom: 2em;

  > p > span {
    font-size: small;
    font-weight: 800;
  }
`;

export const VenueDetails = styled.div`
  background: ${(props) => props.theme.color.white};
  border-radius: 10px;
  padding: 2em;
  margin-bottom: 2em;

  > p > span {
    font-size: small;
    font-weight: 800;
  }
`;
