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
    email: PropTypes.object.isRequired
  };
  render() {
    return <div style={styles.button}>{this.props.email.text}</div>;
  }
}

export default InboxButton;
