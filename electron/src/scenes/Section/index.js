import React from "react";
import ContentPanel from "../../components/ContentPanel/index";
import InfoPanel from "../../components/InfoPanel/index";

export default class Section extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <ContentPanel features={this.props.data.features} />
        <InfoPanel section={this.props.data.section} />
      </div>
    );
  }
}
