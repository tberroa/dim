import React from "react";

export default class FeaturesPanel extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "100%",
      height: "100px",
      backgroundColor: "red",
      display: "flex",
      flexDirection: "row",
      justfiyContent: "center",
      alignItems: "center",
      padding: "5px",
      overflow: "auto"
    };

    const FEATURE_STYLE = {
      maxWidth: "150px",
      textAlign: "center",
      margin: "auto",
      padding: "5px"
    };

    const FEATURES = this.props.features.map((feature) => {
      return (<div style={FEATURE_STYLE}>{feature}</div>);
    });

    return (
      <div style={CONTAINER_STYLE}>
        {FEATURES}
      </div>
    );
  }
}
