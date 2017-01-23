import React from "react";
import MainNav from "./MainNav/index"

export default class PanelA extends React.Component {
  render() {
    var style = {
      width: "150px",
      backgroundColor: "#8E79A3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "auto"
    };

    return (
      <div style={style}>
        <h5>Thomas Berroa</h5>
        <MainNav />
      </div>
    );
  }
}
