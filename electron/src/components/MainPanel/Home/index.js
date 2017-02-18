import React from "react";
import ReactDOM from "react-dom";
import ReactTransitionGroup from "react-addons-transition-group";
import ContentPanel from "../../ContentPanel/index";
import GrowButton from "../../GrowButton/index";
import MainPanel from "../index";
import {APP_CONTAINER_STYLE} from "../../../constants";
import {IMAGES} from "../../../constants";
import STYLE from "./style";

export default class Home extends React.Component {
  handleClick(container){
    let rect = container.getBoundingClientRect();
    this.props.homeSelected(rect.top);
    ReactDOM.render(
      <ReactTransitionGroup style={APP_CONTAINER_STYLE}>
        <MainPanel />
        <ContentPanel />
      </ReactTransitionGroup>,
      document.getElementById("app")
    );
  }

  render() {
    let image = <img src={IMAGES.home} draggable="false" style={STYLE.image} />
    let text = <div style={STYLE.text}>home</div>

    return (
      <GrowButton
        image={image}
        text={text}
        handleClick={this.handleClick.bind(this)}
        style={STYLE.container} />
    );
  }
}
