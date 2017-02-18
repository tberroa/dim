import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card/index";
import Dialog from "../../Dialog/index";
import GrowButton from "../../GrowButton/index";
import {IMAGES} from "../../../constants";
import STYLE from "./style";

export default class Add extends React.Component {
  handleClick(){
    let cards = this.props.sections.map((section) => {
      if (!section.state){
        return(
          <Card
            key={section.name}
            section={section.name}
            image={section.image}
            description={section.description}
            update={this.props.update} />
        );
      }
    });

    ReactDOM.render(
      <Dialog content={cards} style={STYLE.dialog} />,
      document.getElementById("dialog")
    );
  }

  render() {
    let image = <img src={IMAGES.add} draggable="false" style={STYLE.image} />

    return (
      <GrowButton
        image={image}
        handleClick={this.handleClick.bind(this)}
        style={STYLE.container} />
    );
  }
}
