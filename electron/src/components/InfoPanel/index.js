import React from "react";

export default class InfoPanel extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      flex: "0 1 auto",
      width: "250px",
      height: "100%",
      backgroundColor: "#393958",
      padding: "5px",
      overflow: "auto"
    };

    return (
      <div style={CONTAINER_STYLE}>
      </div>
    );
  }
}
