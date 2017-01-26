import React from "react";
import MainNav from "./MainNav/index";

export default class MainPanel extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <MainNav onClick={this.props.onNavClick} />
      </div>
    );
  }
}
