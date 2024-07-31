import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CalenderProvider } from "./context/CalenderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalenderProvider>
      <App />
    </CalenderProvider>
  </React.StrictMode>,
);
