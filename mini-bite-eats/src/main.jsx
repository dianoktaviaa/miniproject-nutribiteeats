import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./routes";
import { TokenProvider } from "./utils/context/token";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);
