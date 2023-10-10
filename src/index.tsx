import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DButton from "./DButton";
import DIcon from "./DIcon";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <DButton type="primary">Primary</DButton>
    <DButton className="my-btn">Default</DButton>

    <br />

    <div className="icon-content">
      <DIcon type="dao-icon-mp4" style={{ color: '#ff2c39' }} />
      <DIcon type="dao-icon-zip" style={{ color: '#5cdbd3' }} />
      <DIcon type="dao-icon-xml" className="color-xml" />
      <DIcon type="dao-icon-csv" className="color-csv" />
      <DIcon type="dao-icon-code" className="color-code" />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
