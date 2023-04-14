import styled from "styled-components";

export const RegisterFormContainer = styled.div`
  background: lightpink;
  max-width: 800px;
  padding: 1em;
  margin: 0 auto;
  display: grid;
  gap: 1em;
  > h2 {
    text-align: center;
  }
`;

export const RegisterFormStatusMessages = styled.div`
  border: 0.2em solid white;
  padding: 1em;
  text-align: center;
`;
