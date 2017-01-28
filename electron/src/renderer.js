import React from "react";
import ReactDOM from "react-dom";
import Home from "./scenes/Home/index";
import MainPanel from "./components/MainPanel/index";
import Section from "./scenes/Section/index";
import Settings from "./services/settings";
import CONSTANTS from "./constants";
import STYLE from "./style";

// Function used to handle the user clicking on one the main navigation section buttons.
function navClickHandler(){
  // Home was clicked, nothing special needs to happen, simply render the home page component.
  if (this.props.section == "home"){
    ReactDOM.render(<Home />, document.getElementById("section-container"));
    return;
  }

  // A non home button was clicked, initialize a data package.
  let data = {};

  // Include the section in the data package.
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

  // Render the corresponding section page and pass down the data.
  ReactDOM.render(
    <Section data={data} />,
    document.getElementById("section-container")
  );
}

// Render the app.
ReactDOM.render(
  <div style={STYLE.appContainer}>
    <div style={STYLE.mainContainer}>
      <MainPanel onNavClick={navClickHandler} />
    </div>
    <div id="section-container" style={STYLE.sectionContainer}>
      <Home />
    </div>
  </div>,
  document.getElementById("app")
);
