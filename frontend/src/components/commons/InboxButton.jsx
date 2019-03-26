import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  button: {
    width: 180,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    borderRadius: 4,
    padding: 6,
    border: "2px solid #009fae"
  }
};

class InboxButton extends Component {
  static propTypes = {
    email: PropTypes.object.isRequired,
    clickFunction: PropTypes.func.isRequired
  };
  render() {
    return (
      <div style={styles.button} onClick={() => this.props.clickFunction(this.props.email.id)}>
        <div>{this.props.email.subject}</div>
        <div>{this.props.email.from}</div>
      </div>
    );
  }
}

export default InboxButton;
