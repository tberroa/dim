import React from "react";

export default class PanelB extends React.Component {
  render() {
    var style = {
      width: "70%",
      height: "100%",
      backgroundColor: "blue"
    };

    return (
      <div style={style}>
        Hello World
      </div>
    );
  }
}
