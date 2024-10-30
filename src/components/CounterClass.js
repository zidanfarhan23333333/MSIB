import React from "react";

export default class CounterClass extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      step: 1,
    };
  }
  handleInputChange = (e) => {
    this.setState({ step: Number(e.target.value) });
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + this.state.step,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - this.state.step,
    });
  };

  newIncrement = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };

  desc = () => {
    this.setState({
      counter: this.state.counter - 5,
    });
  };

  reset = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <div className="col-md-6 t">
        <h2>Class component</h2>
        <h1>{this.state.counter}</h1>

        <input
          type="number"
          className="form-control mb-3"
          placeholder="Masukkan Nomor"
          onChange={this.handleInputChange}
        />
        <button className="btn btn-secondary me-3 " onClick={this.decrement}>
          - {this.state.step}
        </button>
        <button className="btn btn-secondary" onClick={this.increment}>
          + {this.state.step}
        </button>

        <div>
          <button
            className="btn btn-secondary mt-4 me-4"
            onClick={this.newIncrement}
          >
            ascending
          </button>
          <button className="btn btn-secondary mt-4" onClick={this.desc}>
            descending
          </button>
        </div>
      </div>
    );
  }
}
