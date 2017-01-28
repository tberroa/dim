import React from "react";

export default class Feature extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      flex: "0 0 auto",
      width: "80px",
      height: "30px",
      backgroundColor: "#DAC3E0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "10%",
      padding: "5px",
      margin: "5px"
    };

    const TEXT_STYLE = {
      fontSize: "12px",
      color: "#393958",
      textAlign: "center",
      margin: "auto"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <div style={TEXT_STYLE}>{this.props.name}</div>
      </div>
    );
  }
}
