import React from "react";

export default class PanelA extends React.Component {
  render() {
    var style = {
      width: "30%",
      height: "100%",
      backgroundColor: "red"
    };

    return (
      <div style={style}>
        Hello Thomas
      </div>
    );
  }
}
