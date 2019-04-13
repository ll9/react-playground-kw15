import React, { Component } from "react";

class Person extends Component {
  state = {
    teststate: 22
  };

  clickHandler = () => {
    alert("clicked");
  };

  increaseStateHandler = () => {
    this.setState({ teststate: this.state.teststate + 1 });
    this.state.teststate++;
  };

  render() {
    return (
      <div>
        <h1>Person Component</h1>
        <h1>{this.props.name}</h1>
        <button onClick={this.clickHandler}>React Click Handler</button>
        <p>
          My current stateproperty 'teststate' has the value{" "}
          {this.state.teststate}
        </p>
        <button onClick={this.increaseStateHandler}>Increate State</button>
      </div>
    );
  }
}

export default Person;
