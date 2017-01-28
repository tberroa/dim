import React from "react";
import Feature from "./Feature/index";

export default class FeaturesPanel extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      flex: "0 1 auto",
      width: "100%",
      height: "50px",
      backgroundColor: "#474C78",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
      overflow: "auto"
    };

    const FEATURES = this.props.features.map((feature) => {
      return (<Feature name={feature.name} state={feature.state} />);
    });

    return (
      <div style={CONTAINER_STYLE}>
        {FEATURES}
      </div>
    );
  }
}
