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
        <Home />
        <Section section="career" />
        <Section section="finance" />
        <Section section="health" />
        <Section section="medical" />
        <Section section="school" />
      </div>
    );
  }
}
