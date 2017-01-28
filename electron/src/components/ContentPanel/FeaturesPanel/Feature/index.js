import React from "react";
import STYLE from "./style";

export default class Feature extends React.Component {
  render() {
    return (
      <div style={STYLE.containerStyle}>
        <div style={STYLE.textStyle}>{this.props.name}</div>
      </div>
    );
  }
}
