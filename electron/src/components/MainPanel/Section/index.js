import React from "react";
import STYLE from "./style";

export default class Section extends React.Component {
  render() {
    const ROOT_PATH = "/home/tberroa/dim/electron/src/components/MainPanel/Section/";
    const IMG_PATH = ROOT_PATH + "assets/" + this.props.section + ".png";

    return (
      <div style={STYLE.container} onClick={this.props.onClick.bind(this)}>
        <img src={IMG_PATH} alt ="" draggable="false" style={STYLE.image} />
        <div style={STYLE.text}>{this.props.section}</div>
      </div>
    );
  }
}
