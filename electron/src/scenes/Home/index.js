import React from "react";

export default class Home extends React.Component {
  render() {
    var containerStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div style={containerStyle}>
        <h1>Home Content</h1>
      </div>
    );
  }
}
