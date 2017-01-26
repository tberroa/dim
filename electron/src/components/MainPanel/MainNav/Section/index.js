import React from "react";

export default class Section extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "100px",
      height: "100px",
      flex: "0 0 auto",
      textAlign: "center"
    };

    const IMG_STYLE = {
      width: "75px",
      height: "75px",
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
