import {remote} from "electron";
import React from "react";
import Button from "./Button/index";
import {IMAGES} from "../../../constants";
import STYLE from "./style";

export default class Window extends React.Component {
  handleCloseClick(){
    const window = remote.getCurrentWindow();
    window.close();
  }

  handleMinimizeClick(){
    const window = remote.getCurrentWindow();
    window.minimize();
  }

  handleMaximizeClick(){
    const window = remote.getCurrentWindow();
    if (window.isMaximized()){
      window.unmaximize();
    } else{
      window.maximize();
    }
  }

  render() {
    return (
      <div style={STYLE.container}>
        <Button image={IMAGES.close} color="red" handleClick={this.handleCloseClick} />
        <Button image={IMAGES.minimize} color="yellow" handleClick={this.handleMinimizeClick} />
        <Button image={IMAGES.maximize} color="green" handleClick={this.handleMaximizeClick} />
      </div>
    );
  }
}
