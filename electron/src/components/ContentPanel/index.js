import React from "react";
import FeaturesPanel from "./FeaturesPanel/index";

export default class ContentPanel extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      flex: "1 1 auto",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <FeaturesPanel features={this.props.features} />
      </div>
    );
  }
}
