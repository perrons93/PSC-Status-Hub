import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";

export const BUTTON_TYPE = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary"
};

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
  modalHeader: {
    display: "table",
    width: "100%"
  },
  modelTitle: {
    position: "absolute"
  },
  buttonsZone: {
    width: "100%"
  },
  leftBtnLocation: {
    float: "left"
  },
  rightBtnLocation: {
    float: "right"
  },
  buttonSize: {
    minWidth: 125
  }
};

/*
To make the buttons appear, you need to specify the button type, the button title and if needed the button action (button action is not mandatory).
By default, all buttons close the popup box, even if no action has been assigned.
This component can provide a popup box that contains 0 to 2 buttons: none, leftButton and rightButton
Example with one button (1 action): <PopupBox rightButtonType={BUTTON_TYPE.secondary} rightButtonTitle={"Ok"} rightButtonAction={() => someFunction()} />
Example with two buttons (no action): <PopupBox rightButtonType={BUTTON_TYPE.primary} rightButtonTitle={"Cancel"} leftButtonType={BUTTON_TYPE.secondary} leftButtonTitle={"Ok"} />
*/
class PopupBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };

    this.PropTypes = {
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      leftButtonType: PropTypes.string,
      leftButtonTitle: PropTypes.string,
      leftButtonAction: PropTypes.func,
      rightButtonType: PropTypes.string,
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
    const {
      title,
      description,
      leftButtonType,
      leftButtonTitle,
      rightButtonType,
      rightButtonTitle
    } = this.props;

    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <div style={styles.boxContent}>
            <Modal.Header closeButton style={styles.modalHeader}>
              <Modal.Title id="unit-test-popup-box-title" style={styles.modelTitle}>
                {title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body id="unit-test-popup-box-description">{description}</Modal.Body>
            <Modal.Footer>
              <div style={styles.buttonsZone}>
                {leftButtonType && leftButtonTitle && (
                  <div style={styles.leftBtnLocation}>
                    <button
                      id="unit-test-left-btn-title"
                      type="button"
                      className={leftButtonType}
                      style={styles.buttonSize}
                      onClick={this.buttonOneCloseAndAction}
                    >
                      {leftButtonTitle}
                    </button>
                  </div>
                )}

                {rightButtonType && rightButtonTitle && (
                  <div style={styles.rightBtnLocation}>
                    <button
                      id="unit-test-right-btn-title"
                      type="button"
                      className={rightButtonType}
                      style={styles.buttonSize}
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
