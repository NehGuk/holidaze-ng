import styled from "styled-components";

export const BookingListGrid = styled.div`
  padding: 1em 1em;
  display: grid;

  > div {
    background: ${(props) => props.theme.color.shade};
    border-radius: 10px;
    padding: 2em 2em;
    max-width: 70%;
    margin: 0 auto;
    text-align: start;

    > p {
      color: ${(props) => props.theme.color.white};
    }

    > p > span {
      font-size: small;
      font-weight: 800;
      text-transform: uppercase;
    }
  }
`;
