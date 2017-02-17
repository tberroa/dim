import React from "react";
import ReactDOM from "react-dom";
import STYLE from "./style";

export default class Dialog extends React.Component {
  handleClick(){
    ReactDOM.render(
      <Dialog />,
      document.getElementById("dialog")
    );
  }

  render() {
    let style = Object.assign({}, this.props.style, STYLE.container);
    style.marginTop = -(parseInt(style.height) / 2);
    style.marginLeft = -(parseInt(style.width) / 2);

    return (
      <div>
        {this.props.content ? <div onClick={this.handleClick} style={STYLE.overlay}></div> : null}
        {this.props.content ? <div style={style}>{this.props.content}</div> : null}
      </div>
    );
  }
}
