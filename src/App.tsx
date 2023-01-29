import React from "react";
import ReactDOM from "react-dom/client";
import TextClassWelcome from "./components/BasicComponent";

const element = document.getElementById("root");
if (element) {
  const root = ReactDOM.createRoot(element);
  root.render(<TextClassWelcome />);
}

// const p = new TextClassWelcome({});

// const obj = {};

// obj.handleButtonClick = p.handleButtonClick;

// obj.handleButtonClick;

// const handleButtonClick = p.handleButtonClick.bind(p);

// const arr = (props) => {
//   const i = 12;
//   return i;
// };
