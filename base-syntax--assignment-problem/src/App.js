import React, { Component } from "react";
import "./App.css";
import "./UserInput/UserInput";
import "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Frank"
  };

  changeNameHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changeName={this.changeNameHandler}
          userName={this.state.userName}
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
