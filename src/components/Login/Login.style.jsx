import styled from "styled-components";

export const LoginFormContainer = styled.div`
  background: ${(props) => props.theme.color.white};
  border-radius: 10px;
  max-width: 400px;
  margin: 3em auto 0 auto;
  padding: 2em;
  display: grid;
  gap: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 600px) {
    margin: 3em 2em;
  }
`;

export const RegisterAsOther = styled.div`
  text-align: center;
  margin: 1em auto 0 auto;
  max-width: 80%;
`;
