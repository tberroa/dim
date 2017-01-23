import React from "react";

export default class Section extends React.Component {
  render() {
    var style = {
      display: "block";
    };

    return (
      <button style={style}>{this.props.section}</button>
    );
  }
}
