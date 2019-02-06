import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";

class Stack extends Component {
  render() {
    const { title, cards } = this.props.stack;
    // console.log("stack message", this.props);
    return (
      <div>
        <Link className="link-home" to="/">
          <h4>Home</h4>
        </Link>
        <h3>{title}</h3>
        <br />
        {cards.map(card => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stack: state.stack
  };
};

export default connect(
  mapStateToProps,
  null
)(Stack);
