import React from "react";
import TweenMax from "gsap";
import CONSTANTS from "../../../constants";
import STYLE from "./style";

export default class Add extends React.Component {
  handleMouseEnter(){
    TweenMax.to(this.container, 0.2, {backgroundColor:"#C1B7FF"});
    TweenMax.to(this.image, 0.2, {scale: 1.2, ease: Bounce});
    TweenMax.to(this.image, 0.2, {scale: 1, delay: 0.2});
  }

  handleMouseDown(){
    TweenMax.to(this.container, 0.1, {backgroundColor:"#9689ED"});
    TweenMax.to(this.image, 0.1, {y: 2});
  }

  handleMouseUp(){
    TweenMax.to(this.container, 0.1, {backgroundColor:"#C1B7FF"});
    TweenMax.to(this.image, 0.1, {y: 0});
  }

  handleMouseLeave(){
    TweenMax.to(this.container, 0.2, {backgroundColor:"#E6D0ED"});
  }

  handleClick(){

  }

  render() {
    const ROOT_PATH = "/home/tberroa/dim/electron/src/components/MainPanel/Add/";
    const IMG_PATH = ROOT_PATH + "assets/add.png";

    return (
      <div ref={container => this.container = container}
           onMouseEnter={this.handleMouseEnter.bind(this)}
           onMouseDown={this.handleMouseDown.bind(this)}
           onMouseUp={this.handleMouseUp.bind(this)}
           onMouseLeave={this.handleMouseLeave.bind(this)}
           onClick={this.handleClick.bind(this)}
           style={STYLE.container}>
        <img ref={image => this.image = image}
             src={IMG_PATH} alt ="" draggable="false" style={STYLE.image} />
      </div>
    );
  }
}