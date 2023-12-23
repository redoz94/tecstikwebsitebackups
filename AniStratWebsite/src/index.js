import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import { hydrate, render } from "react-dom";
import "react-toastify/dist/ReactToastify.css";

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

