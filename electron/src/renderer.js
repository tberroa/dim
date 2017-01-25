import React from "react";
import ReactDOM from "react-dom";
import MainPanel from "./components/MainPanel/index";
import Home from "./scenes/Home/index";
import Career from "./scenes/Career/index";

var appContainerStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row"
};

var mainPanelContainerStyle = {
  width: "150px",
  height: "100%",
  backgroundColor: "#8E79A3"
};

var contentPanelContainerStyle = {
  flex: "1",
  height: "100%",
  backgroundColor: "#F2EFEF"
};

function navClickHandler(){
  ReactDOM.render(
    <h1>I CLICKED ON {this.props.section}</h1>,
    document.getElementById("content-panel-container")
  );
}

ReactDOM.render(
  <div style={appContainerStyle}>
    <div id="main-panel-container" style={mainPanelContainerStyle}>
      <MainPanel onNavClick={navClickHandler} />
    </div>
    <div id="content-panel-container" style={contentPanelContainerStyle}>
      <Home />
    </div>
  </div>,
  document.getElementById("app")
);
