import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  selected: {
    role: "tab"
  },
  unselected: {
    role: "tab"
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
          <li role="presentation">
            <a
              id={this.props.tabName}
              role="tab"
              aria-controls="TestTabs-pane-instructions"
              aria-selected="false"
              href="#"
            >
              {this.props.tabName}
            </a>
          </li>
        )}
        {this.props.selected === true && (
          <li role="presentation" className="active">
            <a id={this.props.tabName} role="tab" aria-selected="true" href="#">
              {this.props.tabName}
            </a>
          </li>
        )}
      </span>
    );
  }
}

export default Tab;

export { styles };
