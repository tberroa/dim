import {remote} from "electron";
import React from "react";
import Button from "./Button/index";
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
        <Button type="close" handleClick={this.handleCloseClick} />
        <Button type="minimize" handleClick={this.handleMinimizeClick} />
        <Button type="maximize" handleClick={this.handleMaximizeClick} />
      </div>
    );
  }
}
