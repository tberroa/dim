import React from "react";
import ReactDOM from "react-dom";
import Home from "./scenes/Home/index";
import Section from "./scenes/Section/index";
import Settings from "./services/settings";
import CONSTANTS from "./constants";

// Initialize a package to store all handlers for easily passing down to other components.
let handlers = {
  handleHomeClick: handleHomeClick,
  handleSectionClick: handleSectionClick
};

// Function used to handle the user clicking on the home navigation button.
function handleHomeClick(){
  // Render the home page.
  ReactDOM.render(
    <Home handlers={handlers}/>,
    document.getElementById("app")
  );
}

// Function used to handle the user clicking on one of the section navigation button.
function handleSectionClick(){
  // Initialize a data package to pass down to other components.
  let data = {};

  // Include the clicked section in the data package.
  data.section = this.props.section;

  // Get the feature names for the given section.
  let featureNames = null;
  if (this.props.section == "career"){
    featureNames = CONSTANTS.featureNames.career;
  } else if (this.props.section == "finance"){
    featureNames = CONSTANTS.featureNames.finance;
  } else if (this.props.section == "health"){
    featureNames = CONSTANTS.featureNames.health;
  } else if (this.props.section == "medical"){
    featureNames = CONSTANTS.featureNames.medical;
  } else if (this.props.section == "school"){
    featureNames = CONSTANTS.featureNames.school;
  }

  // The state property represents whether a feature is being used or not by the user.
  let featureStates = Settings.getFeatureStates(this.props.section);

  // Package the name and state into a dictionary object for each feature.
  let features = new Array(featureNames.length);
  for (let i = 0; i < featureNames.length; i++){
    features[i] = {name: featureNames[i], state: featureStates[i]};
  }

  // Include the feature information in the data package.
  data.features = features;

  // Render the clicked section page.
  ReactDOM.render(
    <Section handlers={handlers} data={data} />,
    document.getElementById("app")
  );
}

// Render the home page by default.
ReactDOM.render(
  <Home handlers={handlers}/>,
  document.getElementById("app")
);
