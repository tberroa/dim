import React from "react";

export default class PanelB extends React.Component {
  render() {
    var style = {
      flex: "1",
      height: "100%",
      backgroundColor: "#F2EFEF",
      display: "flex",
      flexDirection: "column",
      justfiyContent: "center",
      alignItems: "center"
    };

    return (
      <div style={style}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
