import React from "react";
import STYLE from "./style";

export default class Feature extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <div style={STYLE.text}>{this.props.name}</div>
      </div>
    );
  }
}
