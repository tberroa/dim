import React from "react";
import FeaturesPanel from "./FeaturesPanel/index";
import PanelArea from "./PanelArea/index";
import STYLE from "./style";

export default class ContentPanel extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <PanelArea />
        <FeaturesPanel section={this.props.section} />
      </div>
    );
  }
}
