import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  color: {
    white: "#EAF5FB",
    offwhite: "#D4E4E8",
    lightblue: "#517096",
    blue: "#293D51",
    green: "#6C991F",
    darkgreen: "#567A18",
    shade: "#373C3C",
    dark: "#29211E",
  },
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;

Theme.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
