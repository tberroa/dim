import React from "react";

export default class Section extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      flex: "0 0 auto",
      width: "80px",
      height: "80px",
      backgroundColor: "#DAC3E0",
      borderRadius: "10%",
      textAlign: "center",
      padding: "5px",
      margin: "5px"
    };

    const IMG_STYLE = {
      width: "60px",
      height: "60px",
      display: "block",
      margin: "auto"
    };

    const TEXT_STYLE = {
      fontSize: "12px",
      color: "#393958"
    };

    const ROOT_PATH = "/home/tberroa/dim/electron/src/components/MainPanel/MainNav/Section/";
    const IMG_PATH = ROOT_PATH + "assets/" + this.props.section + ".png";

    return (
      <div style={CONTAINER_STYLE} onClick={this.props.onClick.bind(this)}>
        <img src={IMG_PATH} alt ="" style={IMG_STYLE} />
        <div style={TEXT_STYLE}>{this.props.section}</div>
      </div>
    );
  }
}
