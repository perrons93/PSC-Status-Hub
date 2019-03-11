import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

const styles = {
  boxshape: {
    borderWidth: "1px 1px 0 1px",
    borderStyle: "solid",
    borderColor: "#00565e",
    borderRadius: "5px 5px 5px 5px"
  },
  boxContent: {
    paddingLeft: 20,
    paddingRight: 20
  },
  modelTitle: {
    position: "absolute"
  },
  buttonsZone: {
    width: "100%"
  },
  leftButton: {
    float: "left"
  },
  rightButton: {
    float: "right"
  }
};

class PopupBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };

    this.PropTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      leftButtonTitle: PropTypes.string.isRequired,
      leftButtonAction: PropTypes.func,
      rightButtonTitle: PropTypes.string,
      rightButtonAction: PropTypes.func
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  buttonOneCloseAndAction = () => {
    if (this.props.leftButtonAction) {
      this.props.leftButtonAction();
    }
    this.setState({ show: false });
  };

  buttonTwoCloseAndAction = () => {
    if (this.props.rightButtonAction) {
      this.props.rightButtonAction();
    }
    this.setState({ show: false });
  };

  render() {
    const { title, description, leftButtonTitle, rightButtonTitle } = this.props;

    return (
      <div>
        <button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <div style={styles.boxContent}>
            <Modal.Header closeButton>
              <Modal.Title id="unit-test-popup-box-title" style={styles.modelTitle}>
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="unit-test-popup-box-description">{description}</Modal.Body>
            <Modal.Footer>
              <div style={styles.buttonsZone}>
                {leftButtonTitle && (
                  <div style={styles.leftButton}>
                    <button
                      id="unit-test-left-btn-title"
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.buttonOneCloseAndAction}
                    >
                      {leftButtonTitle}
                    </button>
                  </div>
                )}

                {rightButtonTitle && (
                  <div style={styles.rightButton}>
                    <button
                      id="unit-test-right-btn-title"
                      type="button"
                      className="btn btn-primary"
                      onClick={this.buttonTwoCloseAndAction}
                    >
                      {rightButtonTitle}
                    </button>
                  </div>
                )}
              </div>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    );
  }
}

export default PopupBox;
