import "./Visualizer.css";
import React from "react";

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 10; ++i) {
      array.push(Math.random() * 200);
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <div className="container">
        <div className="bars">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: "#C9B79C",
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>
        <div className="sorting-parameters">
          <button
            onClick={() => {
              this.resetArray();
            }}
          >
            Generate New Array
          </button>
          <button>asdf</button>
        </div>
      </div>
    );
  }
}
