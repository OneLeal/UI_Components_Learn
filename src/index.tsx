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

    <div className="box-layout">
      <h3>按钮-常规</h3>

      <MyButton type="primary">Primary</MyButton>
      <MyButton type="success">Success</MyButton>
      <MyButton type="info">Info</MyButton>
      <MyButton type="warning">Warning</MyButton>
      <MyButton type="error">Error</MyButton>
      <MyButton type="dashed">Dashed</MyButton>
      <MyButton>Default</MyButton>
    </div>

    <div className="box-layout">
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

    <div className="box-layout">
      <h3>文字 & 链接</h3>

      <MyButton type="text">Text</MyButton>
      <MyButton type="text" disabled>
        Text Disabled
      </MyButton>

      <MyButton type="link">Link</MyButton>

      <MyButton type="link" disabled>
        Link
      </MyButton>

      <MyButton
        type="link"
        href="https://docs.nestjs.com/"
        target="_black"
        underline
      >
        Link
      </MyButton>

      <MyButton type="link" disabled underline>
        Link
      </MyButton>
    </div>

    <div className="box-layout">
      <h3>按钮尺寸 & 圆角按钮</h3>

      <MyButton type="primary" shape="round" size="small">
        Small
      </MyButton>

      <MyButton shape="round" size="small">
        Small
      </MyButton>

      <MyButton type="dashed" shape="round" size="small">
        Small
      </MyButton>

      <MyButton type="link" shape="round" size="small">
        Small
      </MyButton>

      <MyButton type="text" shape="round" size="small">
        Small
      </MyButton>

      <MyButton type="primary" shape="round">
        Middle
      </MyButton>

      <MyButton shape="round">Middle</MyButton>
      <MyButton shape="round" type="dashed">
        Middle
      </MyButton>
      <MyButton type="link" shape="round">
        Middle
      </MyButton>
      <MyButton type="text" shape="round">
        Middle
      </MyButton>

      <MyButton type="primary" shape="round" size="large">
        Large
      </MyButton>

      <MyButton shape="round" size="large">
        Large
      </MyButton>

      <MyButton type="dashed" shape="round" size="large">
        Large
      </MyButton>

      <MyButton type="link" shape="round" size="large">
        Large
      </MyButton>

      <MyButton type="text" shape="round" size="large">
        Large
      </MyButton>
    </div>

    <div className="box-layout">
      <h3>Block 按钮</h3>

      <div className="box-row">
        <MyButton type="primary" shape="round" size="large" block>
          Block Button Large
        </MyButton>
      </div>

      <div className="box-row">
        <MyButton shape="round" block>
          Block Button Middle
        </MyButton>
      </div>

      <div className="box-row">
        <MyButton type="dashed" shape="round" size="small" block>
          Block Button Small
        </MyButton>
      </div>

      <div className="box-row">
        <MyButton type="text" shape="round" size="small" block>
          Block Button Text Small
        </MyButton>
      </div>

      <div className="box-row">
        <MyButton type="link" shape="round" size="small" underline block>
          Block Button Link Small
        </MyButton>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
