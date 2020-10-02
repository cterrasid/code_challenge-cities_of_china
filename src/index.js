import React from "react";
import ReactDOM from "react-dom";
import { CitiesContextProvider } from "context/CitiesContext";
import App from "components/App";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <CitiesContextProvider>
      <App />
    </CitiesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
