import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";

const styles = {
  container: {
    position: "relative"
  },
  button: {
    width: "100%",
    textAlign: "left"
  },
  envelopeIcon: {
    marginRight: 6
  },
  expandIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "11px 24px 0 0",
    pointerEvents: "none"
  },
  contentContainer: {
    margin: 12
  }
};

export const ICON_TYPE = {
  email: "fas fa-envelope",
  task: "fas fa-tasks"
};

class CollapsingItemContainer extends Component {
  static propTypes = {
    iconType: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired
  };

  state = {
    isCollapsed: true,
    buttonClass: "btn btn-secondary",
    iconClass: "fas fa-angle-down blue-expand-icon",
    containerClass: ""
  };

  expandItem = () => {
    if (this.state.isCollapsed) {
      this.setState({
        isCollapsed: false,
        buttonClass: "btn btn-primary expanded-button-style",
        iconClass: "fas fa-angle-up white-expand-icon",
        containerClass: "expanded-container-style"
      });
    } else {
      this.setState({
        isCollapsed: true,
        buttonClass: "btn btn-secondary",
        iconClass: "fas fa-angle-down blue-expand-icon",
        containerClass: ""
      });
    }
  };

  render() {
    const { iconType, title, body } = this.props;
    const { isCollapsed, buttonClass, iconClass, containerClass } = this.state;
    return (
      <div className={`${containerClass} collapsing-item-container`} style={styles.container}>
        <button className={buttonClass} style={styles.button} onClick={this.expandItem}>
          <span className={iconType} style={styles.envelopeIcon} />
          {title}
        </button>
        <span id="white-expand-icon-on-hover" className={iconClass} style={styles.expandIcon} />
        {!isCollapsed && <div style={styles.contentContainer}>{body}</div>}
      </div>
    );
  }
}

export default CollapsingItemContainer;
