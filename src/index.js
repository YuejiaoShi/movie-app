import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App-v4";
import "./index.css";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating messages={['Terrible','Bad','Okay','Good','Great']}/> */}
  </React.StrictMode>
);
