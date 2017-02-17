export const APP_CONTAINER_STYLE = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#5B5681",
  overflow: "hidden"
};

export const IMAGES = {
  add: __dirname + "/images/add.png",
  career: __dirname + "/images/career.png",
  close: __dirname + "/images/close.png",
  finance: __dirname + "/images/finance.png",
  health: __dirname + "/images/health.png",
  home: __dirname + "/images/home.png",
  maximize: __dirname + "/images/maximize.png",
  medical: __dirname + "/images/medical.png",
  minimize: __dirname + "/images/minimize.png",
  school: __dirname + "/images/school.png",
}

export const SECTIONS = [
  {
    name: "career",
    features: [
      "Applications",
      "Portfolio",
      "History",
      "References",
      "Documents"
    ],
    image: IMAGES.career,
    description: "Anything related to advancing your path to success."
  },
  {
    name: "finance",
    features: [
      "Balances",
      "Transactions",
      "Budgets",
      "Spending",
      "Investments",
      "Loans",
      "Bills",
      "Savings",
      "Documents"
    ],
    image: IMAGES.finance,
    description: "Tracking money is annoying, let us make it easy for you."
  },
  {
    name: "health",
    features: [
      "Progress",
      "Exercise",
      "Nutrition",
      "Sleep",
      "Water",
      "Groceries",
      "Recipes",
      "Steps"
    ],
    image: IMAGES.health,
    description: "A storage bucket for all your health data."
  },
  {
    name: "medical",
    features: [
      "Appointments",
      "Medication",
      "Conditions",
      "Insurance",
      "Reminders",
      "Documents"
    ],
    image: IMAGES.medical,
    description: "No more needing to memorize your medication or insurance details."
  },
  {
    name: "school",
    features: [
      "Schedule",
      "Classes",
      "Deadlines",
      "Grades",
      "Documents"
    ],
    image: IMAGES.school,
    description: "School is hard, managing it shouldn't have to be as well."
  }
];
