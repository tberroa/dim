import React from "react";
import ContentPanel from "./components/ContentPanel/index";
import MainPanel from "../../components/MainPanel/index";
import STYLE from "./style";

export default class Home extends React.Component {
  render() {
    return (
      <div style={STYLE.container}>
        <MainPanel handleNavClick={this.props.handleNavClick} />
        <ContentPanel />
      </div>
    );
  }
}
