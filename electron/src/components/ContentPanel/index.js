import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import FeaturesPanel from "./FeaturesPanel/index";
import ContentArea from "./ContentArea/index";
import STYLE from "./style";

export default class ContentPanel extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <ContentArea />
        <ReactTransitionGroup>
          {this.props.section && <FeaturesPanel section={this.props.section} />}
        </ReactTransitionGroup>
      </div>
    );
  }
}
