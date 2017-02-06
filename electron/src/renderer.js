import React from "react";
import ReactDOM from "react-dom";
import ReactTransitionGroup from "react-addons-transition-group";
import ContentPanel from "./components/ContentPanel/index";
import MainPanel from "./components/MainPanel/index";
import CONSTANTS from "./constants";

ReactDOM.render(
  <ReactTransitionGroup style={CONSTANTS.appContainerStyle}>
    <MainPanel />
    <ContentPanel />
  </ReactTransitionGroup>,
  document.getElementById("app")
);
