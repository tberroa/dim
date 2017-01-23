import React from "react";
import ReactDOM from "react-dom";
import PanelA from "../../components/PanelA/index";
import PanelB from "../../components/PanelB/index";

ReactDOM.render(
  <div style={{
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row"
  }}>
    <PanelA />
    <PanelB />
  </div>,
  document.getElementById("content")
);
