import React from "react";
import Add from "./Add/index";
import Home from "./Home/index";
import Section from "./Section/index";
import Window from "./Window/index";
import {SECTIONS} from "../../constants";
import STYLE from "./style";

export default class MainPanel extends React.Component {
  constructor(props){
    super(props);

    let sections = SECTIONS.map((section) => {
      return ({
        name: section.name,
        state: false
      });
    });

    this.state = {
      sections: sections
    };
  }

  homeSelected(position){
    TweenMax.to(this.selected, 0.3, {opacity: 0});
    TweenMax.to(this.selected, 0.3, {y: position-11});
  }

  sectionSelected(position){
    TweenMax.to(this.selected, 0.3, {opacity: 1});
    TweenMax.to(this.selected, 0.3, {y: position-11});
  }

  render() {
    let allSectionsShown = true;

    let sections = SECTIONS.map((section, i) => {
      allSectionsShown = allSectionsShown && this.state.sections[i].state;
      if (this.state.sections[i].state){
        return (
          <Section
            key={section.name}
            section={section}
            sectionSelected={this.sectionSelected.bind(this)} />
        );
      }
    });
    sections = sections.filter(Boolean);

    return (
      <div style={STYLE.container}>
        <Window />
        <Home homeSelected={this.homeSelected.bind(this)}/>
        {sections}
        {!allSectionsShown && <Add sections={SECTIONS} />}
        <div ref={selected => this.selected = selected} style={STYLE.selected} />
      </div>
    );
  }
}
