import React from "react";
import STYLE from "./style";

export default class Feature extends React.Component {
  render() {
    let containerStyle = STYLE.container;
    
    if (this.props.last){
      containerStyle = STYLE.containerLast;
    }

    return (
      <div style={containerStyle}>
        <div style={STYLE.text}>{this.props.name}</div>
      </div>
    );
  }
}
