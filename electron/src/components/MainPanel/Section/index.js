import React from "react";
import ReactDOM from "react-dom";
import ReactTransitionGroup from "react-addons-transition-group";
import ContentPanel from "../../ContentPanel/index";
import GrowButton from "../../GrowButton/index";
import InfoPanel from "../../InfoPanel/index";
import MainPanel from "../index";
import {APP_CONTAINER_STYLE} from "../../../constants";
import STYLE from "./style";

export default class Section extends React.Component {
  handleClick(container){
    let rect = container.getBoundingClientRect();
    this.props.sectionSelected(rect.top);
    ReactDOM.render(
      <ReactTransitionGroup style={APP_CONTAINER_STYLE}>
        <MainPanel />
        <ContentPanel section={this.props.section} />
        <InfoPanel section={this.props.section} />
      </ReactTransitionGroup>,
      document.getElementById("app")
    );
  }

  render() {
    let image = <img src={this.props.section.image} draggable="false" style={STYLE.image} />
    let text = <div style={STYLE.text}>{this.props.section.name}</div>

    return (
      <GrowButton
        image={image}
        text={text}
        handleClick={this.handleClick.bind(this)}
        style={STYLE.container} />
    );
  }
}
