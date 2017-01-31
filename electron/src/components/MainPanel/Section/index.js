import React from "react";
import STYLE from "./style";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      pressed: false
    };
  }

  handleMouseOver(){
    this.setState({
      hover: true
    });
  }

  handleMouseOut(){
    this.setState({
      hover: false,
      pressed: false
    });
  }

  handleMouseDown(){
    this.setState({
      pressed: true
    });
  }

  handleMouseUp(){
    this.setState({
      pressed: false
    });
  }

  render() {
    const ROOT_PATH = "/home/tberroa/dim/electron/src/components/MainPanel/Section/";
    const IMG_PATH = ROOT_PATH + "assets/" + this.props.section + ".png";

    let containerStyle = STYLE.container;

    if (this.state.pressed){
      containerStyle = STYLE.containerPressed;
    } else if (this.state.hover){
      containerStyle = STYLE.containerHover;
    }

    return (
      <div style={containerStyle}
           onMouseOver={this.handleMouseOver.bind(this)}
           onMouseOut={this.handleMouseOut.bind(this)}
           onMouseDown={this.handleMouseDown.bind(this)}
           onMouseUp={this.handleMouseUp.bind(this)}
           onClick={this.props.handleNavClick.bind(this)}>
        <img src={IMG_PATH} alt ="" draggable="false" style={STYLE.image} />
        <div style={STYLE.text}>{this.props.section}</div>
      </div>
    );
  }
}
