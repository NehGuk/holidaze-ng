import styled from "styled-components";

export const FormContainer = styled.div`
  background: lightseagreen;
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  padding: 2em;
`;

export const FormFields = styled.div`
  > form {
    background: lightgoldenrodyellow;
    display: grid;
    gap: 0.5em;
  }

  > form > textarea {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    opacity: 90%;
  }
`;
