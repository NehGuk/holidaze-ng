import styled from "styled-components";

export const AllBookingsListContainer = styled.div`
  /* display: none; */
  /* background: green; */
  max-width: 900px;
  /* max-width: 90vw; */
  margin: 0 auto;

  > div > h2 {
    font-size: medium;
    margin-bottom: 3em;
  }

  @media (max-width: 1000px) {
    margin: 2em;
  }

  @media (max-width: 450px) {
    /* display: none; */
  }
`;

export const AllBookingsGrid = styled.div`
  /* background: lightgreen; */
  /* border: 2px solid ${(props) => props.theme.color.lightblue}; */
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
    /* border: 3px solid red; */
    /* background: lightcoral; */
    width: 100%;
    position: relative;
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
    /* text-align: center; */
    padding: 0 1em 3em 2em;
    border-radius: 0 10px 10px 0;

    > :nth-child(6) {
      /* display: none; */
      margin-bottom: 2em;
    }

    @media (max-width: 500px) {
      > :nth-child(5) {
        /* display: none; */
      }
    }
  }

  :hover {
    scale: 1.01;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: ease-in-out 0.2s;
  }

  @media (max-width: 1000px) {
    /* margin: 2em; */
    grid-template-columns: 0.3fr 1.7fr;
  }
`;
