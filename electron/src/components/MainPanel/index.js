import React from "react";
import Section from "./Section/index";
import STYLE from "./style";

export default class MainPanel extends React.Component {
  render() {
    return (
      <div style={STYLE.containerStyle}>
        <Section section="home" onClick={this.props.onNavClick} />
        <Section section="career" onClick={this.props.onNavClick} />
        <Section section="finance" onClick={this.props.onNavClick} />
        <Section section="health" onClick={this.props.onNavClick} />
        <Section section="medical" onClick={this.props.onNavClick} />
        <Section section="school" onClick={this.props.onNavClick} />
      </div>
    );
  }
}
