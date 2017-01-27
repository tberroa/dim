import React from "react";
import ReactDOM from "react-dom";
import MainPanel from "./components/MainPanel/index";
import Home from "./scenes/Home/index";
import Section from "./scenes/Section/index";
import FEATURE_NAMES from "./constants/features";
import Settings from "./services/settings";

const APP_CONTAINER_STYLE = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row"
};

const MAIN_CONTAINER_STYLE = {
  flex: "0 0 auto",
  width: "150px",
  height: "100%",
  backgroundColor: "#393958",
  overflow: "auto"
};

const CONTENT_CONTAINER_STYLE = {
  flex: "1 1 auto",
  height: "100%",
  backgroundColor: "#5B5681",
  overflow: "hidden"
};

// Function used to handle the user clicking on one the main navigation section buttons.
function navClickHandler(){
  // Home was clicked, nothing special needs to happen, simply render the home page component.
  if (this.props.section == "home"){
    ReactDOM.render(<Home />, document.getElementById("content-container"));
    return;
  }

  // A non home button was clicked, get the feature names.
  let featureNames = null;
  if (this.props.section == "career"){
    featureNames = FEATURE_NAMES.career;
  } else if (this.props.section == "finance"){
    featureNames = FEATURE_NAMES.finance;
  } else if (this.props.section == "health"){
    featureNames = FEATURE_NAMES.health;
  } else if (this.props.section == "medical"){
    featureNames = FEATURE_NAMES.medical;
  } else if (this.props.section == "school"){
    featureNames = FEATURE_NAMES.school;
  }

  // The state property represents whether a feature is being used or not by the user.
  let featureStates = Settings.getFeatureStates(this.props.section);

  // Package the name and state into a dictionary object for each feature.
  let features = new Array(featureNames.length);
  for (let i = 0; i < featureNames.length; i++){
    features[i] = {name: featureNames[i], state: featureStates[i]};
  }

  // Render the corresponding section page, pass the feature information down the components.
  ReactDOM.render(
    <Section section={this.props.section} features={features} />,
    document.getElementById("content-container")
  );
}

// Render the app.
ReactDOM.render(
  <div style={APP_CONTAINER_STYLE}>
    <div id="main-container" style={MAIN_CONTAINER_STYLE}>
      <MainPanel onNavClick={navClickHandler} />
    </div>
    <div id="content-container" style={CONTENT_CONTAINER_STYLE}>
      <Home />
    </div>
  </div>,
  document.getElementById("app")
);
