import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Language from "./context/LanguageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Language>
    <App />
  </Language>
);
