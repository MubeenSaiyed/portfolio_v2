import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import init from "./utils/smoothScroll";

const container = document.getElementById("root");
const root = createRoot(container);
document.querySelector("body").onload = () => {
  init();
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
