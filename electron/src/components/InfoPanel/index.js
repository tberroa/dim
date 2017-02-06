import React from "react";
import TweenMax from "gsap";
import STYLE from "./style";

export default class InfoPanel extends React.Component {
  componentWillEnter(callback){
    TweenMax.fromTo(
      this.container, 0.5, {x: 400, opacity: 0}, {x: 0, opacity: 1, onComplete: callback}
    );
  }

  componentWillLeave(callback){
    TweenMax.fromTo(
      this.container, 0.5, {x: 0, opacity: 1}, {x: 400, opacity: 0, onComplete: callback}
    );
  }

  render() {
    return (
      <div ref={container => this.container = container} style={STYLE.container}>
      </div>
    );
  }
}
