import React from "react";
import Add from "./Add/index";
import Dialog from "../Dialog/index";
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

  updateSection(section, state){
    for (let i=0; i<this.state.sections.length; i++){
      if (section == this.state.sections[i].name){
        this.state.sections[i].state = state;
        break;
      }
    }
    this.setState({sections: this.state.sections});
  }

  render() {
    let allSectionsShown = true;

    let sectionButtons = SECTIONS.map((section, i) => {
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
    sectionButtons = sectionButtons.filter(Boolean);

    let sections = SECTIONS.map((section, i) => {
      section.state = this.state.sections[i].state;
      return (section);
    });

    return (
      <div style={STYLE.container}>
        <Window />
        <Home homeSelected={this.homeSelected.bind(this)}/>
        {sectionButtons}
        {!allSectionsShown && <Add sections={sections} update={this.updateSection.bind(this)}/>}
        <div ref={selected => this.selected = selected} style={STYLE.selected} />
      </div>
    );
  }
}
