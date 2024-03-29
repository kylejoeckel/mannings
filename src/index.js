import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./app";
import reportWebVitals from "./config/reportWebVitals";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
