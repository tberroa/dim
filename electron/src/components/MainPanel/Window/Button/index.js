import React from "react";
import TweenMax from "gsap";
import STYLE from "./style";

export default class Button extends React.Component {
  handleMouseEnter(){
    TweenMax.to(this.image, 0.2, {opacity: 1});
    TweenMax.to(this.container, 0.2, {scale: 1.2, ease: Bounce});
    TweenMax.to(this.container, 0.2, {scale: 1, delay: 0.2});
  }

  handleMouseDown(){
    TweenMax.to(this.container, 0, {opacity: 0.6});
    TweenMax.to(this.image, 0.1, {y: 2});
  }

  handleMouseUp(){
    TweenMax.to(this.container, 0, {opacity: 1});
    TweenMax.to(this.image, 0.1, {y: 0});
  }

  handleMouseLeave(){
    TweenMax.to(this.container, 0, {opacity: 1});
    TweenMax.to(this.image, 0.1, {y: 0});
    TweenMax.to(this.image, 0.2, {opacity: 0});
  }

  render() {
    STYLE.container.backgroundColor = this.props.color;

    return (
      <div
        ref={container => this.container = container}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        onClick={this.props.handleClick}
        style={STYLE.container}>

        <img
          ref={image => this.image = image}
          src={this.props.image}
          alt =""
          draggable="false"
          style={STYLE.image} />
      </div>
    );
  }
}
