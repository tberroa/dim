import React from "react";
import STYLE from "./style";

export default class Feature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hover: false,
      pressed: false
    };
  }

  handleMouseOver(){
    this.setState({
      hover: true
    });
  }

  handleMouseDown(){
    this.setState({
      pressed: true
    });
  }

  handleMouseUp(){
    this.setState({
      pressed: false
    });
  }

  handleMouseOut(){
    this.setState({
      hover: false,
      pressed: false
    });
  }

  render() {
    let containerStyle = STYLE.container;

    if (this.state.pressed && !this.props.last){
      containerStyle = STYLE.containerPressed;
    } else if (this.state.pressed && this.props.last){
      containerStyle = STYLE.containerLastPressed;
    } else if (this.state.hover && !this.props.last){
      containerStyle = STYLE.containerHover;
    } else if (this.state.hover && this.props.last){
      containerStyle = STYLE.containerLastHover;
    } else if (this.props.last){
      containerStyle = STYLE.containerLast;
    }

    return (
      <div style={containerStyle}
           onMouseOver={this.handleMouseOver.bind(this)}
           onMouseDown={this.handleMouseDown.bind(this)}
           onMouseUp={this.handleMouseUp.bind(this)}
           onMouseOut={this.handleMouseOut.bind(this)}>
        <div style={STYLE.text}>{this.props.name}</div>
      </div>
    );
  }
}
