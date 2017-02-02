import React from "react";
import ContentPanel from "./components/ContentPanel/index";
import InfoPanel from "./components/InfoPanel/index";
import MainPanel from "../../components/MainPanel/index";
import STYLE from "./style";

export default class Section extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <MainPanel handlers={this.props.handlers} />
        <ContentPanel section={this.props.data.section} features={this.props.data.features} />
        <InfoPanel section={this.props.data.section} />
      </div>
    );
  }
}
