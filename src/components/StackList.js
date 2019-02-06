import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import stacks from "../data/stacks.json";
import { setStack, loadStacks } from "../actions";

class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) {
      this.props.loadStacks(stacks);
    }
  }

  render() {
    // console.log("stacklist props", this.props);
    return (
      <div>
        {this.props.stacks.map(stack => {
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

const mapStateToProps = state => {
  return { stacks: state.stacks };
};

export default connect(
  mapStateToProps,
  { setStack, loadStacks }
)(StackList);
