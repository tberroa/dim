import React from "react";
import Home from "./Home/index";
import Section from "./Section/index";
import Window from "./Window/index";
import STYLE from "./style";

export default class MainPanel extends React.Component {
  updateSelected(position){
    TweenMax.to(this.selected, 0.3, {y: position-11});
  }

  render() {
    return (
      <div style={STYLE.container}>
        <Window />
        <Home />
        <Section section="career" updateSelected={this.updateSelected.bind(this)} />
        <Section section="finance" updateSelected={this.updateSelected.bind(this)} />
        <Section section="health" updateSelected={this.updateSelected.bind(this)} />
        <Section section="medical" updateSelected={this.updateSelected.bind(this)} />
        <Section section="school" updateSelected={this.updateSelected.bind(this)} />
        <div ref={selected => this.selected = selected} style={STYLE.selected} />
      </div>
    );
  }
}
