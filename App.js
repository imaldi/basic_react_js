import React from "react";
import ReactDOM from "react-dom/client";

function TextWelcome(props) {
  return <h1>Hello, world! {props.name}</h1>;
}

class TextClassWelcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    /// pakai parenthesis untuk return object di arrow function, supaya ga di anggap body
    this.setState((state) => ({ ...state, count: state.count + 1 }));
  }
  render() {
    /// pakai parenthesis untuk semicolon return
    return (
      <>
        <TextWelcome name="Aldi" />
        <TextWelcome name="Umam 4" />
        <div>{this.state.count}</div>
        <button onClick={this.handleButtonClick}>Add</button>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TextClassWelcome />);

// const p = new TextClassWelcome({});

// const obj = {};

// obj.handleButtonClick = p.handleButtonClick;

// obj.handleButtonClick;

// const handleButtonClick = p.handleButtonClick.bind(p);

// const arr = (props) => {
//   const i = 12;
//   return i;
// };
