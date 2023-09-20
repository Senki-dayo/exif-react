import React from "react";
import ReactDOM from "react-dom/client";
import ExifDate from "./ExifDate";
// import ExifLocate from "./ExifLocate";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ExifDate />
    {/* <ExifLocate /> */}
  </React.StrictMode>,
);
