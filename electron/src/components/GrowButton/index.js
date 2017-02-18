import React from "react";
import TweenMax from "gsap";

export default class GrowButton extends React.Component{
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
    TweenMax.to(this.image, 0.1, {y: 0});
  }

  render(){
    let image = React.cloneElement(this.props.image, {ref: image => this.image = image});

    return (
      <div
        ref={container => this.container = container}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={() => this.props.handleClick(this.container)}
        style={this.props.style}>

        {image}
        {this.props.text}
      </div>
    )
  }
}
