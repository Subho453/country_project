import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "./App";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) =>
      props.theme === "light" ? "hsl(0, 0%, 100%)" : "hsl(209, 23%, 22%)"};
    color: ${(props) =>
      props.theme === "light" ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 100%)"};
  }
`;

class StyledTheme extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => <GlobalStyle {...this.props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  }
}

export default StyledTheme;
