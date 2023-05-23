import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
/* import PropTypes from "prop-types"; */

export const SimgAvatarMenu = styled.img`
  width: 7em;
  height: 7em;
  border: 0.3em solid ${(props) => props.theme.color.blue};
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 600px) {
    width: 9em;
    height: 9em;
  }
`;

// buttons
export const Sbutton = styled.button`
  background: ${(props) => props.theme.color.white};
  border: none;
  padding: 1em 3em;
  margin: 0.3em;
  display: block;
  color: ${(props) => props.theme.color.blue};
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
  transition: ease-in-out 0.2s;
  :hover {
    transition: ease-in-out 0.2s;
    background: white;
  }

  ${(props) =>
    props.$blue &&
    css`
      background: ${(props) => props.theme.color.blue};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.lightblue};
      }
    `};

  ${(props) =>
    props.$lightblue &&
    css`
      background: ${(props) => props.theme.color.lightblue};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.blue};
      }
    `};

  ${(props) =>
    props.$green &&
    css`
      background: ${(props) => props.theme.color.green};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.darkgreen};
      }
    `};

  ${(props) =>
    props.$negative &&
    css`
      background: ${(props) => props.theme.color.shade};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.dark};
      }
    `};

  @media (min-width: 600px) {
    min-width: 400px;
  }
`;

// regular buttons
export const SRegButton = styled.button`
  background: ${(props) => props.theme.color.lightblue};
  border: none;
  padding: 1em 3em;
  color: white;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px;
  transition: ease-in-out 0.2s;
  :hover {
    transition: ease-in-out 0.2s;
    background: ${(props) => props.theme.color.blue};
    color: ${(props) => props.theme.color.white};
  }

  ${(props) =>
    props.$negative &&
    css`
      background: ${(props) => props.theme.color.shade};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.dark};
      }
    `};

  ${(props) =>
    props.$green &&
    css`
      background: ${(props) => props.theme.color.green};
      color: white;
      font-weight: 800;
      font-size: large;
      :hover {
        color: white;
        background: ${(props) => props.theme.color.darkgreen};
      }
    `};

  @media (min-width: 600px) {
    /* min-width: 3em; */
  }
`;

// link buttons
export const SLinkButton = styled(Link)`
  background: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  font-size: medium;
  font-weight: 600;
  padding: 1em 2em;
  border-radius: 7px;
  display: inline-block;
  transition: ease-in-out 0.2s;
  :hover {
    transition: ease-in-out 0.2s;
    background: ${(props) => props.theme.color.dark};
    color: ${(props) => props.theme.color.white};
  }

  ${(props) =>
    props.$green &&
    css`
      background: ${(props) => props.theme.color.green};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.darkgreen};
      }
    `};

  ${(props) =>
    props.$dark &&
    css`
      background: ${(props) => props.theme.color.dark};
      color: ${(props) => props.theme.color.white};
      :hover {
        color: white;
        background: ${(props) => props.theme.color.shade};
      }
    `};

  ${(props) =>
    props.$lightblue &&
    css`
      background: ${(props) => props.theme.color.lightblue};
      color: white;
      :hover {
        color: white;
        background: ${(props) => props.theme.color.blue};
      }
    `};

  ${(props) =>
    props.$white &&
    css`
      background: ${(props) => props.theme.color.white};
      color: ${(props) => props.theme.color.blue};
      :hover {
        color: ${(props) => props.theme.color.blue};
        background: white;
      }
    `};

  @media (max-width: 400px) {
    font-size: small;
    font-weight: 600;
    padding: 1em 1em;
  }
`;

// typography

export const Sh1Title = styled.h1`
  color: ${(props) => props.theme.color.blue};
`;

export const Sh2CardTitle = styled.h2`
  color: ${(props) => props.theme.color.blue};
  padding-bottom: 1em;

  ${(props) =>
    props.$details &&
    css`
      color: ${(props) => props.theme.color.blue};
      position: relative;
      margin: 0.5em 0 -1em 0;
      padding-bottom: 0.5em;
    `};

  ${(props) =>
    props.$generic &&
    css`
      color: ${(props) => props.theme.color.dark};
      font-size: medium;
      text-transform: uppercase;
    `};
`;

export const SpFormError = styled.p`
  margin: -0.5em 0 1em 0.5em;
  font-weight: 600;
  font-size: small;
  color: ${(props) => props.theme.color.blue};
`;

export const SpAPIErrorMessage = styled.p`
  /* margin: em 0 1em 0.5em; */
  font-weight: 600;
  font-size: medium;
  color: ${(props) => props.theme.color.blue};
`;

export const SpWarning = styled.p`
  /* text-align: center; */
  text-transform: uppercase;
  font-size: smaller;
  font-weight: 800;
  color: ${(props) => props.theme.color.blue};
  border: solid 2px ${(props) => props.theme.color.shade};
  padding: 1em;
  border-radius: 5px;
`;

export const SSpanTitle = styled.span`
  color: ${(props) => props.theme.color.lightblue};
  text-transform: uppercase;
  font-size: smaller;
  font-weight: 800;
`;

export const SSpanPrice = styled.span`
  color: ${(props) => props.theme.color.blue};
  text-transform: uppercase;
  font-size: x-large;
  font-weight: 800;
`;

export const Shr = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.color.lightblue};
  height: 2px;
  margin-top: 1em;
  margin-bottom: -2em;
  opacity: 80%;
`;

export const Shr2 = styled.hr`
  border: none;
  border-top: 1px solid ${(props) => props.theme.color.lightblue};
  height: 2px;
  /* margin-top: 1em; */
  /* margin-bottom: -2em; */
  opacity: 80%;
`;

// input

export const Sinput = styled.input`
  padding: 0.5em 1em;
  border-radius: 10px;
  border: none;
  font-size: large;

  :focus {
    background: white;
    border: none;
    outline: solid 3px ${(props) => props.theme.color.lightblue};
  }
`;

export const Stextarea = styled.textarea`
  padding: 0.5em 1em;
  border-radius: 10px;

  border: none;
  font-size: large;

  :focus {
    background: white;
    border: none;
    outline: solid 3px ${(props) => props.theme.color.lightblue};
  }
`;

/* export const StextareaTrick = ({ rows, ...rest }) => {
  return <Stextarea rows={rows} {...rest} />;
}; */

/* StextareaTrick.propTypes = {
  rows: PropTypes.number, // Add this prop validation
}; */

export const SinputNumber = styled.input`
  padding: 0.5em 1em;
  width: 4em;
  border-radius: 10px;
  border: none;
  font-size: large;

  :focus {
    background: white;
    border: none;
    outline: solid 3px ${(props) => props.theme.color.lightblue};
  }
`;

// layout templates
export const PageArea0Container = styled.div`
  margin: 3em auto 0 auto;
  padding: 2em;
  max-width: 900px;
  /* background: ${(props) => props.theme.color.white}; */
  /* border-radius: 10px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); */
  display: grid;
  /* place-items: center; */
  /* text-align: center; */
  @media (max-width: 700px) {
    max-width: 50%;
  }
`;

export const PageArea1Container = styled.div`
  margin: 3em auto 0 auto;
  padding: 2em;
  max-width: 600px;
  background: ${(props) => props.theme.color.white};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: grid;
  place-items: center;

  text-align: center;

  @media (max-width: 700px) {
    max-width: 50%;
  }
`;

export const CTAArea = styled.div`
  display: grid;
  gap: 1em;
  margin-top: 2em;
  text-align: center;
`;
