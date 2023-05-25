import styled from "styled-components";

export const BookingConfirmArea = styled.div`
  margin-top: 2em;
  background: ${(props) => props.theme.color.white};
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 1em;

  > p > span {
    font-size: small;
    font-weight: 600;
  }

  > div {
    display: grid;
    gap: 1em;
    margin-top: 2em;
  }
`;
