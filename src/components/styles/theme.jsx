import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    white: "#EAF5FB",
    offwhite: "#D4E4E8",
    lightblue: "#5879A2",
    darkblue: "#293D51",
    green: "#3B5411",
    grey: "#373C3C",
    black: "#29211E",
  },
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
