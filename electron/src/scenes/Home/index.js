import React from "react";

export default class Home extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <h1>Home Content</h1>
      </div>
    );
  }
}
