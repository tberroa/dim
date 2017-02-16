import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import TweenMax from "gsap";
import Feature from "./Feature/index";
import STYLE from "./style";

export default class FeaturesPanel extends React.Component {
  componentWillEnter(callback){
    TweenMax.fromTo(
      this.container, 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback}
    );
  }

  componentWillLeave(callback){
    TweenMax.fromTo(
      this.container, 0.5, {y: 0, opacity: 1}, {y: 100, opacity: 0, onComplete: callback}
    );
  }

  render() {
    let features = this.props.section.features.map((feature, i, array) => {
      let start = i == 0;
      let end = array.length == i + 1;
      return (
        <ReactTransitionGroup key={this.props.section.name + feature}>
          <Feature name={feature} start={start} end={end} />
        </ReactTransitionGroup>
      );
    });

    return (
      <div ref={container => this.container = container} style={STYLE.container}>
        {features}
      </div>
    );
  }
}
