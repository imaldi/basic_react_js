import React from "react";
function TextWelcome(props: { name: string }) {
  return <h1>Hello, world! {props.name}</h1>;
}

interface Props {}

interface State {
  count: number;
  incrementNumber: number;
}

export default class TextClassWelcome extends React.Component<Props, State> {
  interval: number | undefined;
  constructor(props: Props) {
    super(props);
    this.state = { count: 0, incrementNumber: 1 };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    /// pakai parenthesis untuk return object di arrow function, supaya ga di anggap body
    this.setState((state) => ({
      ...state,
      incrementNumber: state.incrementNumber + 1,
    }));
  }
  incrementEverySecond() {}

  override componentDidMount() {
    this.interval = window.setInterval(() => {
      // call your function here
      this.setState((state) => ({
        ...state,
        count: state.count + state.incrementNumber,
      }));
    }, 1000);
    // clearInterval(interval);
  }

  override componentWillUnmount() {
    clearInterval(this.interval);
  }

  override render() {
    /// pakai parenthesis untuk semicolon return
    return (
      <>
        <TextWelcome name="Aldi" />
        <TextWelcome name="Umam 4" />
        <div>count: {this.state.count}</div>
        <div>increment number: {this.state.incrementNumber}</div>
        <button onClick={this.handleButtonClick}>Add</button>
      </>
    );
  }
}
