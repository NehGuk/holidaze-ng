import styled from "styled-components";
import hero from "../../assets/hero.jpg";

export const SearchContainer = styled.div`
  /* background: blue; */
  background-image: url("${hero}");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  min-width: 100vw;
  min-height: 90vh;
  margin-top: -3em;

  /* text-align: center; */

  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const SimgHero = styled.img`
  max-width: 100vw;
`;

export const SearchInputArea = styled.div`
  text-align: center;
  position: absolute;
  bottom: 7em;

  > input {
    padding: 1em 2em;
    border-radius: 10px;
  }
`;
