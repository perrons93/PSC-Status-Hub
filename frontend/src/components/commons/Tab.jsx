import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  selected: {
    color: "black"
  },
  unselected: {
    color: "blue"
  }
};

class Tab extends Component {
  static propTypes = {
    tabName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <span>
        {this.props.selected === false && (
          <button className={this.props.tabName} style={styles.unselected}>
            {this.props.tabName}
          </button>
        )}
        {this.props.selected === true && (
          <button className={this.props.tabName} style={styles.selected}>
            {this.props.tabName}
          </button>
        )}
      </span>
    );
  }
}

export default Tab;

export { styles };
