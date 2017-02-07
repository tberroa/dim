import React from "react";
import TweenMax from "gsap";
import STYLE from "./style";

export default class ContentArea extends React.Component {
  componentWillEnter(callback){
    callback();
    TweenMax.fromTo(this.container, 0.2, {opacity: 0}, {opacity: 1}).delay(0.2);
  }

  componentWillLeave(callback){
    callback();
    TweenMax.to(this.container, 0.2, {opacity: 0});
  }

  render() {
    return (
      <div ref={container => this.container = container} style={STYLE.container}>
        {this.props.section} Content Area
      </div>
    );
  }
}
