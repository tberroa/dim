import React from "react";
import TweenMax from "gsap";
import STYLE from "./style";

export default class Feature extends React.Component {
  handleMouseEnter(){
    TweenMax.fromTo(
      this.container, 0.2, {backgroundColor:"#474C78"}, {backgroundColor: "#5E6496"}
    );
  }

  handleMouseDown(){
    TweenMax.to(this.container, 0.2, {backgroundColor:"#898FC6"});
  }

  handleMouseUp(){
    TweenMax.to(this.container, 0.2, {backgroundColor:"#5E6496"});
  }

  handleMouseLeave(){
    TweenMax.fromTo(
      this.container, 0.2, {backgroundColor:"#5E6496"}, {backgroundColor:"#474C78"}
    );
  }

  componentWillAppear(callback){
    TweenMax.fromTo(
      this.container, 0.2, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback}
    );
  }

  render() {
    let containerStyle = STYLE.container;

    if (this.props.start){
      containerStyle = STYLE.containerStart;
    } else if (this.props.end){
      containerStyle = STYLE.containerEnd;
    }

    return (
      <div
        ref={container => this.container = container}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        style={containerStyle}>
        
        <div style={STYLE.text}>{this.props.name}</div>
      </div>
    );
  }
}
