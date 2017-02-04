import React from "react";
import ReactDOM from "react-dom";
import ContentPanel from "./components/ContentPanel/index";
import MainPanel from "./components/MainPanel/index";
import CONSTANTS from "./constants";

ReactDOM.render(
  <div style={CONSTANTS.appContainerStyle}>
    <MainPanel />
    <ContentPanel />
  </div>,
  document.getElementById("app")
);
