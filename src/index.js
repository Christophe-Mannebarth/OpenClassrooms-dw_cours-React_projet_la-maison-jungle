// IMPORT LIBRARIES, STYLE AND COMPONENT
/* Importing the React library from the react package. */
import React from "react";
/* Importing the ReactDOM library from the react-dom package. */
import ReactDOM from "react-dom/client";
/* Importing the stylesheet for the application. */
import "./styles/index.css";
/* Importing the App component from the components folder. */
import App from "./components/App";

// ROOT
/* Creating a root element for the React application. */
const root = ReactDOM.createRoot(document.getElementById("root"));
/* Rendering the App component to the root element. */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
