import React from "react";

export default class Section extends React.Component {
  render() {
    var containerStyle = {
      width: "100px",
      height: "100px",
      flexShrink: "0",
      textAlign: "center"
    };

    var imgStyle = {
      width: "75px",
      height: "75px",
      display: "block",
      margin: "auto"
    };

    var rootPath = "/home/tberroa/dim/electron/src/components/MainPanel/MainNav/Section/";
    var imgPath = rootPath + "assets/" + this.props.section + ".png";

    return (
      <div style={containerStyle} onClick={this.props.onClick.bind(this)}>
        <img src={imgPath} alt ="" style={imgStyle} />
        {this.props.section}
      </div>
    );
  }
}
