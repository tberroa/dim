import React from "react";

export default class Section extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "80px",
      height: "80px",
      flex: "0 0 auto",
      textAlign: "center",
      backgroundColor: "#8D66AB",
      borderStyle: "ridge",
      borderColor: "#5C2A83",
      borderRadius: "50%",
      fontSize: "12px",
      padding: "5px",
      margin: "5px"
    };

    const IMG_STYLE = {
      width: "60px",
      height: "60px",
      display: "block",
      margin: "auto"
    };

    const ROOT_PATH = "/home/tberroa/dim/electron/src/components/MainPanel/MainNav/Section/";
    const IMG_PATH = ROOT_PATH + "assets/" + this.props.section + ".png";

    return (
      <div style={CONTAINER_STYLE} onClick={this.props.onClick.bind(this)}>
        <img src={IMG_PATH} alt ="" style={IMG_STYLE} />
        {this.props.section}
      </div>
    );
  }
}
