import React from "react";
import Add from "./Add/index";
import Home from "./Home/index";
import Section from "./Section/index";
import Window from "./Window/index";
import STYLE from "./style";

export default class MainPanel extends React.Component {
  homeSelected(position){
    TweenMax.to(this.selected, 0.3, {opacity: 0});
    TweenMax.to(this.selected, 0.3, {y: position-11});
  }

  sectionSelected(position){
    TweenMax.to(this.selected, 0.3, {opacity: 1});
    TweenMax.to(this.selected, 0.3, {y: position-11});
  }

  render() {
    return (
      <div style={STYLE.container}>
        <Window />
        <Home homeSelected={this.homeSelected.bind(this)}/>
        <Section section="career" sectionSelected={this.sectionSelected.bind(this)} />
        <Add />
        <div ref={selected => this.selected = selected} style={STYLE.selected} />
      </div>
    );
  }
}
