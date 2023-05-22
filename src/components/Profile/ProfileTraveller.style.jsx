import styled from "styled-components";

export const ProfileTravellerContainer = styled.div`
  margin-top: -4em;
  text-align: center;
`;

export const ProfileImgArea = styled.div`
  display: grid;
  place-items: center;
  /* background: green; */
  padding: 1em;
  > img {
    width: 9em;
    height: 9em;
    border-radius: 50%;
    border: solid 0.3em ${(props) => props.theme.color.lightblue};
    object-fit: cover;
  }
`;

export const Area1 = styled.div`
  max-width: 100%;
  margin: 2em 0 2em 0;
  padding: 2em;
  border-radius: 10px;
  background: ${(props) => props.theme.color.lightblue};
  color: ${(props) => props.theme.color.white};
  display: grid;
  place-content: center;
  text-align: center;

  > h2 {
    margin-bottom: 0;
    color: ${(props) => props.theme.color.white};
  }

  > p {
    /* margin-top: 0; */
    /* margin-bottom: 0; */
  }

  > p > span {
    font-size: small;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

export const Area2 = styled.div`
  max-width: 100%;
  margin: 2em 0 2em 0;
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.blue};
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: start;

  > h2 {
    margin-bottom: 0;
  }

  > h3 {
    margin-bottom: 0;
  }

  > p {
    margin-bottom: 0;
  }

  > p > span {
    font-size: small;
    font-weight: 800;
    text-transform: uppercase;
  }

  > div {
    p {
      text-transform: uppercase;
      font-weight: 600;
      font-size: small;
      color: ${(props) => props.theme.color.shade};
      margin: 0.2em 0 2em 0;
    }
  }
`;
