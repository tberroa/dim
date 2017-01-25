import React from "react";
import MainNav from "./MainNav/index";

export default class MainPanel extends React.Component {
  render() {
    var containerStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      overflow: "auto"
    };

    return (
      <div style={containerStyle}>
        <h5>Thomas Berroa</h5>
        <MainNav onClick={this.props.onNavClick} />
      </div>
    );
  }
}
