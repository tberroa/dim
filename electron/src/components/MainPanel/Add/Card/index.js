import React from "react";
import ReactDOM from "react-dom";
import Dialog from "../../../Dialog/index";
import GrowButton from "../../../GrowButton/index";
import STYLE from "./style";

export default class Card extends React.Component {
  handleClick(){
    this.props.update(this.props.section, true)
    ReactDOM.render(
      <Dialog />,
      document.getElementById("dialog")
    );
  }

  render() {
    let image = <img src={this.props.image} draggable="false" style={STYLE.image} />
    let text = <div style={STYLE.text}>{this.props.description}</div>

    return (
      <GrowButton
        image={image}
        text={text}
        handleClick={this.handleClick.bind(this)}
        style={STYLE.container} />
    );
  }
}
