import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
