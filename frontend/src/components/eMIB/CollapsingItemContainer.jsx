import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../css/collapsing-item.css";

const styles = {
  container: {
    position: "relative",
    margin: "16px 0 16px 0"
  },
  button: {
    width: "100%",
    textAlign: "left"
  },
  title: {
    fontSize: 18
  },
  envelopeIcon: {
    marginRight: 8,
    fontSize: 18
  },
  collapsingIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: "11px 24px 0 0",
    color: "#00565E",
    pointerEvents: "none",
    fontSize: 18
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
    isHidden: true,
    buttonClass: "btn btn-secondary",
    iconClass: "fas fa-angle-down",
    containerClass: ""
  };

  expandItem = () => {
    if (this.state.isHidden) {
      this.setState({
        isHidden: false,
        buttonClass: "btn btn-primary expanded-button-style",
        iconClass: "fas fa-angle-up expand-icon-style",
        containerClass: "expanded-container-style"
      });
    } else {
      this.setState({
        isHidden: true,
        buttonClass: "btn btn-secondary",
        iconClass: "fas fa-angle-down",
        containerClass: ""
      });
    }
  };

  render() {
    const { iconType, title, body } = this.props;
    const { isHidden, buttonClass, iconClass, containerClass } = this.state;
    return (
      <div className={`${containerClass} collapsing-item-container`} style={styles.container}>
        <button className={buttonClass} style={styles.button} onClick={this.expandItem}>
          <span className={iconType} style={styles.envelopeIcon} />
          <span style={styles.title}>{title}</span>
        </button>
        <span className={`${iconClass} expand-icon`} style={styles.collapsingIcon} />
        {!isHidden && <div style={styles.contentContainer}>{body}</div>}
      </div>
    );
  }
}

export default CollapsingItemContainer;
