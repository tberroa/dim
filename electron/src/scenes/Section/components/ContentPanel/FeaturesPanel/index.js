import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import Feature from "./Feature/index";
import STYLE from "./style";

export default class FeaturesPanel extends React.Component {
  render() {
    let features = this.props.features.map((feature, i, array) => {
      let start = i == 0;
      let end = array.length == i + 1;
      return (
        <ReactTransitionGroup key={this.props.section + feature.name}>
          <Feature name={feature.name} state={feature.state} start={start} end={end} />
        </ReactTransitionGroup>
      );
    });

    return (
      <div style={STYLE.container}>
        {features}
      </div>
    );
  }
}
