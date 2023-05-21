import styled from "styled-components";

export const MyBookingsListContainer = styled.div`
  /* display: none; */
  background: green;
  max-width: 900px;
  margin: 0 auto;

  img {
    max-width: 200px;
  }
`;

export const MyBookingsGrid = styled.div`
  background: lightgreen;
  border: 2px solid blue;
  display: grid;
  border-radius: 10px;
  grid-template-columns: 0.6fr 1.4fr;
  grid-template-areas:
    "imgDiv contentDiv"
    "imgDiv contentDiv";
  min-height: 13em;

  > :nth-child(1) {
    grid-area: imgDiv;
    border: 3px solid red;
    background: lightcoral;
    width: 100%;
    position: relative;
    overflow-x: hidden;
  }

  > :nth-child(2) {
    grid-area: contentDiv;
    background: lightslategray;
    text-align: center;
  }

  > :nth-child(1) > img {
    min-height: 100%;
    max-width: 100%;
    object-fit: cover;
    display: block;
    position: absolute;
  }
`;
