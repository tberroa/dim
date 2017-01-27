import React from "react";
import MainNav from "./MainNav/index";

export default class MainPanel extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "10px",
      paddingBottom: "10px"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <MainNav onClick={this.props.onNavClick} />
      </div>
    );
  }
}
