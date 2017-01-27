import React from "react";
import FeaturesPanel from "../../components/FeaturesPanel/index";

export default class Section extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    };

    const PANEL_CONTAINER_STYLE = {
      flex: "1 1 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <div style={PANEL_CONTAINER_STYLE}>
          <h1>{this.props.section} Panel Area</h1>
        </div>
        <FeaturesPanel features={this.props.features} />
      </div>
    );
  }
}
