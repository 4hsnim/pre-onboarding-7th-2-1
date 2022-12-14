import React from "react";
import { ThemeProvider } from "styled-components";
import Router from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
