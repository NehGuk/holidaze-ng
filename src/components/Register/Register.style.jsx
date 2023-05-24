import styled from "styled-components";

export const RegisterGrid = styled.div`
  background: ${(props) => props.theme.color.white};
  max-width: 400px;
  margin: 3em auto 0 auto;
  border-radius: 10px;
  padding: 3em;
  display: grid;
  gap: 1em;
  place-items: center;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  > a {
    width: 70%;
  }

  @media (max-width: 600px) {
    > a {
      width: 80%;
    }
    margin: 3em 2em;
  }
`;
