import React from "react";
import ReactDOM from "react-dom/client";
import ExifDate from "./ExifDate";
import ExifLocate from "./ExifLocate";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <p>exif情報を扱うReactコンポーネント</p>
    <p>ライブラリの動作テスト</p>
    <ExifDate />
    <ExifLocate />
  </React.StrictMode>,
);
