import React, { Component } from "react";
import { Link } from "react-router-dom";
import StackList from "./StackList";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Cardfade Pro</h2>
        <hr />
        <StackList />
        <hr />
        <Link to="stack_form">
          <h4>Create a New Stack</h4>
        </Link>
      </div>
    );
  }
}

export default App;
