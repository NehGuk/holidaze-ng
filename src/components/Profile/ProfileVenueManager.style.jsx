import styled from "styled-components";

export const ProfileTravellerContainer = styled.div`
  margin-top: -4em;
  > h1 {
    text-align: center;
  }

  > :nth-child(5) {
    text-align: center;
  }
`;

export const ProfileImgArea = styled.div`
  display: grid;
  place-items: center;
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
  word-break: break-all;
  margin: 2em 0 2em 0;
  padding: 2em;
  border-radius: 10px;
  background: ${(props) => props.theme.color.lightblue};
  color: ${(props) => props.theme.color.white};
  display: grid;
  place-content: center;

  > h2 {
    margin-bottom: 0;
    color: ${(props) => props.theme.color.white};
  }

  > p > span {
    font-size: small;
    font-weight: 800;
    text-transform: uppercase;
    word-wrap: break-word;
  }
`;
