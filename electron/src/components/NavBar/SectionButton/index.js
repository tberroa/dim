import React from "react";

export default class SectionButton extends React.Component {
  render() {
    return (
      <button class="section-button">{this.props.section}</button>
    )
  }
}
