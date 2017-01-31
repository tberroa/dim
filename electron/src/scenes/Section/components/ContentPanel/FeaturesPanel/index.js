import React from "react";
import Feature from "./Feature/index";
import STYLE from "./style";

export default class FeaturesPanel extends React.Component {
  render() {
    let features = this.props.features.map((feature, i, array) => {
      let last = array.length == i + 1;
      return (<Feature key={feature.name} name={feature.name} state={feature.state} last={last} />);
    });

    return (
      <div style={STYLE.container}>
        {features}
      </div>
    );
  }
}
