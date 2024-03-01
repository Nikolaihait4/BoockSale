import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./app/App/App";

const container = document.getElementById("root");
const root = createRoot(container);

reportWebVitals();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
