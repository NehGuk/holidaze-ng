import styled from "styled-components";

export const MyVenuesListContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;

  > h2 {
    font-size: medium;
    margin-bottom: 3em;
  }

  @media (max-width: 1000px) {
    margin: 2em;
  }
`;

export const MyVenuesGrid = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: grid;
  border-radius: 10px;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-areas:
    "imgDiv contentDiv"
    "imgDiv contentDiv";
  min-height: 13em;
  margin-bottom: 2em;
  transition: ease-in-out 0.2s;

  > :nth-child(1) {
    grid-area: imgDiv;
    width: 100%;
    position: relative;
    overflow-x: hidden;
  }

  > :nth-child(1) > img {
    min-height: 100%;
    max-width: 100%;
    object-fit: cover;
    display: block;
    position: absolute;
    border-radius: 10px 0 0 10px;
  }

  > :nth-child(2) {
    grid-area: contentDiv;
    background: ${(props) => props.theme.color.white};
    padding: 0 1em 3em 2em;
    border-radius: 0 10px 10px 0;

    > :nth-child(6) {
      margin-bottom: 2em;
    }
  }

  :hover {
    scale: 1.01;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: ease-in-out 0.2s;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 0.3fr 1.7fr;
  }
`;
