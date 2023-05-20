import styled from "styled-components";
import hero from "../../assets/hero.jpg";

export const SearchContainer = styled.div`
  /* background: blue; */
  background-image: url("${hero}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-width: 100vw;
  min-height: 100vh;
  min-height: 100svh;
  margin-top: -9em;

  display: flex;
  justify-content: center;

  position: relative;
  text-align: cen;
`;

export const SimgHero = styled.img`
  max-width: 100vw;
`;

export const SearchInputArea = styled.div`
  text-align: center;
  position: absolute;
  bottom: 3em;
  /* background: ${(props) => props.theme.color.lightblue}; */
  border-radius: 10px;
  backdrop-filter: blur(7px);
  /* opacity: 50%; */
  padding: 1em 3em;

  > div > h1 {
    color: ${(props) => props.theme.color.white};
    margin-bottom: 1em;
    padding: 0 2em;
  }

  > div > input {
    padding: 1em 2em;
    border-radius: 10px;
    border: none;
    outline: none;
    margin-right: 1em;
    margin-bottom: 2em;
    border: 0.3em solid ${(props) => props.theme.color.white}; /* Add border */

    :focus {
      background: white;
      border: none;
      outline: red;
      border: 0.3em solid ${(props) => props.theme.color.white}; /* Add border */
      outline: none;
    }
  }

  > div > button {
    background: ${(props) => props.theme.color.lightblue};
    border: 0.3em solid ${(props) => props.theme.color.lightblue};

    padding: 1em 2em;
    color: ${(props) => props.theme.color.white};
    cursor: pointer;
    font-weight: 600;
    border-radius: 10px;
    :hover {
      background: ${(props) => props.theme.color.blue};
    }

    @media (max-width: 600px) {
      background: ${(props) => props.theme.color.blue};
      border: 0.3em solid ${(props) => props.theme.color.blue};
    }
  }

  /* > div > h1 {
    position: absolute;
    top: 4.5em;
    color: ${(props) => props.theme.color.white};
    padding: 0.6em 3em;
    background: rgba(${(props) => props.theme.color.blue}, 0.5);
  } */

  @media (max-width: 600px) {
    padding: 10em 3em 7em 3em;
    backdrop-filter: blur(30px);
    bottom: 0;
  }
`;