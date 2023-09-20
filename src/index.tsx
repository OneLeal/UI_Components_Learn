import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import DButton from './DButton';
import MyButton from "./components/Button";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <DButton type='primary'>Primary</DButton>
    <DButton className='my-btn'>Default</DButton> */}

    <div style={{ padding: "50px" }}>
      <h3>按钮-常规</h3>

      <MyButton type="primary">Primary</MyButton>
      <MyButton type="success">Success</MyButton>
      <MyButton type="info">Info</MyButton>
      <MyButton type="warning">Warning</MyButton>
      <MyButton type="error">Error</MyButton>
      <MyButton type="dashed">Dashed</MyButton>
      <MyButton>Default</MyButton>
    </div>

    <div style={{ padding: "50px" }}>
      <h3>按钮-禁用</h3>
      <MyButton disabled type="primary">
        Primary
      </MyButton>
      <MyButton disabled type="success">
        Success
      </MyButton>
      <MyButton disabled type="info">
        Info
      </MyButton>
      <MyButton disabled type="warning">
        Warning
      </MyButton>
      <MyButton disabled type="error">
        Error
      </MyButton>
      <MyButton disabled type="dashed">
        Dashed
      </MyButton>
      <MyButton disabled>Default</MyButton>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
