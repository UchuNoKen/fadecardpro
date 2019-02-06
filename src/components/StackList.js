import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import stacks from "../data/stacks.json";
import { setStack } from "../actions";

class StackList extends Component {
  render() {
    // console.log("stacklist props", this.props);
    return (
      <div>
        {stacks.map(stack => {
          return (
            // warning with no key on Link
            <Link key={stack.title} to="/stack">
              <h4 key={stack.id} onClick={() => this.props.setStack(stack)}>
                {stack.title}
              </h4>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default connect(
  null,
  { setStack }
)(StackList);
