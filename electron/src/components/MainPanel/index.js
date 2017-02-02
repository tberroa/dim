import React from "react";
import Home from "./Home/index";
import Section from "./Section/index";
import Window from "./Window/index";
import STYLE from "./style";

export default class MainPanel extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <Window />
        <Home handleClick={this.props.handlers.handleHomeClick} />
        <Section section="career" handleClick={this.props.handlers.handleSectionClick} />
        <Section section="finance" handleClick={this.props.handlers.handleSectionClick} />
        <Section section="health" handleClick={this.props.handlers.handleSectionClick} />
        <Section section="medical" handleClick={this.props.handlers.handleSectionClick} />
        <Section section="school" handleClick={this.props.handlers.handleSectionClick} />
      </div>
    );
  }
}
