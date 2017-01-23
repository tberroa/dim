import React from "react";
import Section from "./Section/index";

export default class MainNav extends React.Component {
  render() {
    var style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };

    return (
      <div style={style}>
        <Section section="career" />
        <Section section="finance" />
        <Section section="health" />
        <Section section="medical" />
        <Section section="school" />
      </div>
    );
  }
}
