import React from "react";
import Section from "./Section/index";

export default class MainNav extends React.Component {
  render() {
    const CONTAINER_STYLE = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };

    return (
      <div style={CONTAINER_STYLE}>
        <Section section="home" onClick={this.props.onClick} />
        <Section section="career" onClick={this.props.onClick} />
        <Section section="finance" onClick={this.props.onClick} />
        <Section section="health" onClick={this.props.onClick} />
        <Section section="medical" onClick={this.props.onClick} />
        <Section section="school" onClick={this.props.onClick} />
      </div>
    );
  }
}
