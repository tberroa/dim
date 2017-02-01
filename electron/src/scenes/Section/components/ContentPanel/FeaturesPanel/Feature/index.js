import React from "react";
import TweenMax from "gsap";
import STYLE from "./style";

export default class Feature extends React.Component {
  handleMouseEnter(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#9689ED"});
  }

  handleMouseDown(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#C1B7FF"});
  }

  handleMouseUp(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"#9689ED"});
  }

  handleMouseLeave(){
    TweenMax.to(this.container, 0.15, {backgroundColor:"transparent"});
  }

  componentWillAppear(callback){
    TweenMax.fromTo(
      this.container, 0.15, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback}
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
      <div ref={container => this.container = container} style={containerStyle}
           onMouseEnter={this.handleMouseEnter.bind(this)}
           onMouseDown={this.handleMouseDown.bind(this)}
           onMouseUp={this.handleMouseUp.bind(this)}
           onMouseLeave={this.handleMouseLeave.bind(this)}>
        <div style={STYLE.text}>{this.props.name}</div>
      </div>
    );
  }
}
