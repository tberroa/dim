import React from "react";
import TweenMax from "gsap";
import STYLE from "./style";

export default class Home extends React.Component {
  handleMouseEnter(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#C1B7FF"});
  }

  handleMouseDown(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#9689ED"});
  }

  handleMouseUp(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#C1B7FF"});
  }

  handleMouseLeave(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#E6D0ED"});
  }

  render() {
    const ROOT_PATH = "/home/tberroa/dim/electron/src/components/MainPanel/Home/";
    const IMG_PATH = ROOT_PATH + "assets/home.png";

    return (
      <div ref={container => this.container = container} style={STYLE.container}
           onMouseEnter={this.handleMouseEnter.bind(this)}
           onMouseDown={this.handleMouseDown.bind(this)}
           onMouseUp={this.handleMouseUp.bind(this)}
           onMouseLeave={this.handleMouseLeave.bind(this)}
           onClick={this.props.handleClick.bind(this)}>
        <img src={IMG_PATH} alt ="" draggable="false" style={STYLE.image} />
        <div style={STYLE.text}>home</div>
      </div>
    );
  }
}
