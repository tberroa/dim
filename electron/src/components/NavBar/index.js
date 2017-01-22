import React from "react";
import SectionButton from "./SectionButton/index";

export default class NavBar extends React.Component {
  render() {
    return (
      <div id="nav-bar">
      <SectionButton section="career" />
      <SectionButton section="finance" />
      <SectionButton section="health" />
      <SectionButton section="medical" />
      <SectionButton section="school" />
      </div>
    );
  }
}
