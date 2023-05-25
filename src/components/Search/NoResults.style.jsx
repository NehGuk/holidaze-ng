import styled from "styled-components";

export const NoResultsContainer = styled.div`
  min-height: 50vh;
  min-height: 50svh;
  max-width: 800px;
  margin: 3em auto 0 auto;
  text-align: center;
  > div > h3 {
    margin: -1em auto 2em auto;
    color: ${(props) => props.theme.color.blue};
    font-size: medium;
  }
`;
