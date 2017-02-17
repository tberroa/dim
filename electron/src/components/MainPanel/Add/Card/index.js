import React from "react";
import STYLE from "./style";

export default class Card extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <img src={this.props.image} alt ="" draggable="false" style={STYLE.image} />
        <div style={STYLE.text}>{this.props.description}</div>
      </div>
    );
  }
}
