import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import TweenMax from "gsap";
import Feature from "./Feature/index";
import CONSTANTS from "../../../constants";
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
    let names = null;
    if (this.props.section == "career"){
      names = CONSTANTS.featureNames.career;
    } else if (this.props.section == "finance"){
      names = CONSTANTS.featureNames.finance;
    } else if (this.props.section == "health"){
      names = CONSTANTS.featureNames.health;
    } else if (this.props.section == "medical"){
      names = CONSTANTS.featureNames.medical;
    } else if (this.props.section == "school"){
      names = CONSTANTS.featureNames.school;
    }

    let features = names.map((name, i, array) => {
      let start = i == 0;
      let end = array.length == i + 1;
      return (
        <ReactTransitionGroup key={this.props.section + name}>
          <Feature name={name} start={start} end={end} />
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
