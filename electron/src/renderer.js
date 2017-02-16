import React from "react";
import ReactDOM from "react-dom";
import ReactTransitionGroup from "react-addons-transition-group";
import ContentPanel from "./components/ContentPanel/index";
import MainPanel from "./components/MainPanel/index";
import {APP_CONTAINER_STYLE} from "./constants";

ReactDOM.render(
  <ReactTransitionGroup style={APP_CONTAINER_STYLE}>
    <MainPanel />
    <ContentPanel />
  </ReactTransitionGroup>,
  document.getElementById("app")
);
