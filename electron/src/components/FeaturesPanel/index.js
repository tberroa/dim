import React from "react";

export default class FeaturesPanel extends React.Component {
  render() {
    var style = {
      width: "100%",
      height: "100px",
      backgroundColor: "red",
      display: "flex",
      flexDirection: "row",
      justfiyContent: "center",
      alignItems: "center"
    };
    
    return (
      <div style={style}>
        <div>FEATURE 1</div>
        <div>FEATURE 2</div>
        <div>FEATURE 3</div>
        <div>FEATURE 4</div>
      </div>
    );
  }
}
