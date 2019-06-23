import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
