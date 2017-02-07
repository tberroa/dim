import React from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import ContentArea from "./ContentArea/index";
import FeaturesPanel from "./FeaturesPanel/index";
import STYLE from "./style";

export default class ContentPanel extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <ReactTransitionGroup style={STYLE.content}>
          <ContentArea key={this.props.section} section={this.props.section}/>
        </ReactTransitionGroup>
        <ReactTransitionGroup>
          {this.props.section && <FeaturesPanel section={this.props.section} />}
        </ReactTransitionGroup>
      </div>
    );
  }
}
