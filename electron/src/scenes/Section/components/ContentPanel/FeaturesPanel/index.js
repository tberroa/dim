import React from "react";
import Feature from "./Feature/index";
import STYLE from "./style";

export default class FeaturesPanel extends React.Component {
  render() {
    let features = this.props.features.map((feature) => {
      return (<Feature key={feature.name} name={feature.name} state={feature.state} />);
    });

    return (
      <div style={STYLE.container}>
        {features}
      </div>
    );
  }
}
