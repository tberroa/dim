import React from "react";
import Section from "./Section/index";
import STYLE from "./style";

export default class MainPanel extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <Section section="home" handleNavClick={this.props.handleNavClick} />
        <Section section="career" handleNavClick={this.props.handleNavClick} />
        <Section section="finance" handleNavClick={this.props.handleNavClick} />
        <Section section="health" handleNavClick={this.props.handleNavClick} />
        <Section section="medical" handleNavClick={this.props.handleNavClick} />
        <Section section="school" handleNavClick={this.props.handleNavClick} />
      </div>
    );
  }
}
