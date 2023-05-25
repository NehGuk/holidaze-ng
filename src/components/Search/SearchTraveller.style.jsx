import styled from "styled-components";

export const SearchInputArea = styled.div`
  text-align: center;

  > div > input {
    padding: 1em 2em;
    border-radius: 10px;
    border: none;
    font-size: large;

    margin-right: 1em;
    margin-bottom: 2em;

    :focus {
      background: white;
      border: none;

      outline: solid 3px ${(props) => props.theme.color.lightblue};
    }
  }
`;
