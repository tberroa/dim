import React from "react";
import FeaturesPanel from "../../components/FeaturesPanel/index";

export default class Career extends React.Component {
  render() {
    var containerStyle = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end"
    };

    return (
      <div style={containerStyle}>
        <h1>Career Content</h1>
        <FeaturesPanel />
      </div>
    );
  }
}
