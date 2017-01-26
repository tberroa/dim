import React from "react";
import ReactDOM from "react-dom";
import MainPanel from "./components/MainPanel/index";
import Home from "./scenes/Home/index";
import Section from "./scenes/Section/index";

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
  backgroundColor: "#8E79A3",
  overflow: "auto"
};

const CONTENT_CONTAINER_STYLE = {
  flex: "1 1 auto",
  height: "100%",
  backgroundColor: "#F2EFEF",
  overflow: "hidden"
};

const CAREER_FEATURES = [
  "Job Applications",
  "Portfolio",
  "Work History",
  "References",
  "Documents"
];

const FINANCE_FEATURES = [
  "Balances",
  "Transactions",
  "Budgets",
  "Spending",
  "Investments",
  "Loans",
  "Bills",
  "Savings",
  "Documents"
];

const HEALTH_FEATURES = [
  "Weight Progress",
  "Exercise Plan",
  "Nutrition Plan",
  "Sleep Pattern",
  "Water Intake",
  "Groceries",
  "Recipes",
  "Steps Taken"
];

const MEDICAL_FEATURES = [
  "Appointments",
  "Medication",
  "Health Conditions",
  "Insurance Details",
  "Reminders",
  "Documents"
];

const SCHOOL_FEATURES = [
  "Schedule",
  "Classes",
  "Deadlines",
  "Grades",
  "Documents"
];

function navClickHandler(){
  if (this.props.section == "home"){
    ReactDOM.render(<Home />, document.getElementById("content-container"));
    return;
  }

  let features = null;
  if (this.props.section == "career"){
    features = CAREER_FEATURES;
  } else if (this.props.section == "finance"){
    features = FINANCE_FEATURES;
  } else if (this.props.section == "health"){
    features = HEALTH_FEATURES;
  } else if (this.props.section == "medical"){
    features = MEDICAL_FEATURES;
  } else if (this.props.section == "school"){
    features = SCHOOL_FEATURES;
  }

  ReactDOM.render(
    <Section section={this.props.section} features={features} />,
    document.getElementById("content-container")
  );
}

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
