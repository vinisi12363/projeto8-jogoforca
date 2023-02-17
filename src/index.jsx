import React from 'react';
import ReactDOM  from 'react';
import App from "./components/App";
import "./style/reset.css"
import "./style/style.css"

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

