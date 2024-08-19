import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CalenderProvider } from "./context/CalenderContext.tsx";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { HeaderContextProvider } from "./context/HeaderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CalenderProvider>
        <HeaderContextProvider>
          <App />
        </HeaderContextProvider>
      </CalenderProvider>
    </Provider>
  </React.StrictMode>,
);
